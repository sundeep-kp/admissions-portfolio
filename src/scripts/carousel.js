/*
 * Carousel functionality — controlled scroll with snap, arrows, dots, keyboard, touch.
 * 
 * DESIGN PHILOSOPHY (aligned with About Me carousel):
 * 1. SINGLE CARD PER VIEW on ALL breakpoints (100% width) — matches About Me carousel
 * 2. Mobile (≤767px): free scroll with snap, 90% card width, arrows/dots HIDDEN
 *    - Cards peek to signal scrollability
 *    - Native momentum scroll with snap
 * 3. Desktop (≥768px): controlled scroll via arrows/dots, 100% card width
 * 4. Navigation bounded by maxIndex = slides.length - 1 — never wraps, never overflows
 * 5. Scroll ALWAYS on TRACK element, never window — prevents page scroll bugs
 * 6. Touch: native scroll on track, JS only updates dots (passive listener)
 * 7. Dots = pages (1 per card since 1 card/view), not slides
 * 
 * BUG FIX HISTORY:
 * - Previously used scrollIntoView() which scrolled entire page at carousel end
 * - Fixed by using track.scrollTo({ left: slide.offsetLeft }) 
 * - Previously had slidesPerView responsive (2-3 on desktop) — changed to match
 *   About Me carousel's 1-card-per-view philosophy
 */

export function initAllCarousels() {
	const carousels = document.querySelectorAll('.carousel');

	carousels.forEach(carousel => {
		const track = carousel.querySelector('[data-carousel-track]');
		const prevBtn = carousel.querySelector('[data-carousel-prev]');
		const nextBtn = carousel.querySelector('[data-carousel-next]');
		const dotsContainer = carousel.querySelector('[data-carousel-dots]');
		const slides = Array.from(track?.children || []);

		if (!track || slides.length <= 1) return;

		// Read per-carousel settings from data attributes
		const customScroll = carousel.dataset.customScroll === 'true';
		const autoplayEnabled = carousel.dataset.autoplay === 'true';
		const autoplayInterval = parseInt(carousel.dataset.autoplayInterval || '5000', 10);

		// Always 1 card per view — matches About Me carousel philosophy
		const maxIndex = slides.length - 1;

		let currentIndex = 0;
		let autoplayTimer = null;
		let isAnimating = false;

		// Create dots - one per card (since 1 card per view)
		if (dotsContainer) {
			slides.forEach((_, i) => {
				const dot = document.createElement('button');
				dot.className = 'carousel__dot' + (i === 0 ? ' carousel__dot--active' : '');
				dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
				dot.setAttribute('data-carousel-dot', String(i));
				dot.addEventListener('click', () => goToSlide(i));
				dotsContainer.appendChild(dot);
			});
		}

		const dots = dotsContainer?.querySelectorAll('[data-carousel-dot]') || [];

		function updateDots() {
			dots.forEach((dot, i) => {
				dot.classList.toggle('carousel__dot--active', i === currentIndex);
			});
		}

		function goToSlide(index) {
			if (isAnimating || index === currentIndex) return;
			isAnimating = true;

			currentIndex = Math.max(0, Math.min(index, maxIndex));
			
			const targetSlide = slides[currentIndex];
			if (targetSlide) {
				const maxScrollLeft = track.scrollWidth - track.clientWidth;
				const targetLeft = targetSlide.offsetLeft;
				const scrollLeft = Math.min(targetLeft, maxScrollLeft);
				
				track.scrollTo({
					left: scrollLeft,
					behavior: 'smooth'
				});
			}
			updateDots();

			setTimeout(() => { isAnimating = false; }, 400);
		}

		function nextSlide() {
			if (currentIndex < maxIndex) {
				goToSlide(currentIndex + 1);
			}
		}

		function prevSlide() {
			if (currentIndex > 0) {
				goToSlide(currentIndex - 1);
			}
		}

		function startAutoplay() {
			if (autoplayTimer) clearInterval(autoplayTimer);
			autoplayTimer = window.setInterval(nextSlide, autoplayInterval);
		}

		function stopAutoplay() {
			if (autoplayTimer) clearInterval(autoplayTimer);
			autoplayTimer = null;
		}

		// Event listeners
		prevBtn?.addEventListener('click', prevSlide);
		nextBtn?.addEventListener('click', nextSlide);

		// Pause autoplay on hover
		carousel.addEventListener('mouseenter', stopAutoplay);
		carousel.addEventListener('mouseleave', startAutoplay);

		// Custom scroll handler for Robotics carousel (25% width cards)
		if (customScroll) {
			track.addEventListener('scroll', () => {
				if (isAnimating) return;
				
				// Simple approach: check scroll position against slide positions
				const scrollLeft = track.scrollLeft;
				
				// Find the slide whose left edge is closest to scrollLeft
				let closestIndex = 0;
				let minDistance = Infinity;
				
				slides.forEach((slide, index) => {
					const distance = Math.abs(slide.offsetLeft - scrollLeft);
					if (distance < minDistance) {
						minDistance = distance;
						closestIndex = index;
					}
				});
				
				// Check if at end
				const atEnd = scrollLeft >= track.scrollWidth - track.clientWidth - 2;
				const finalIndex = atEnd ? maxIndex : Math.min(closestIndex, maxIndex);
				
				if (finalIndex !== currentIndex) {
					currentIndex = finalIndex;
					updateDots();
				}
			}, { passive: true });
		} else {
			/* Touch/swipe support - let native scroll handle it, just update dots.
			 * Listen on TRACK not carousel/window to avoid accidental page scroll.
			 * Passive listener for performance. */
			track.addEventListener('scroll', () => {
				if (isAnimating) return;
				
				// Find which slide is closest to center of viewport
				const trackRect = track.getBoundingClientRect();
				const trackCenter = trackRect.left + trackRect.width / 2;
				
				let closestIndex = 0;
				let closestDistance = Infinity;
				
				slides.forEach((slide, index) => {
					const slideRect = slide.getBoundingClientRect();
					const slideCenter = slideRect.left + slideRect.width / 2;
					const distance = Math.abs(slideCenter - trackCenter);
					if (distance < closestDistance) {
						closestDistance = distance;
						closestIndex = index;
					}
				});
				
				// Also check if we're at the end
				const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
				const finalIndex = atEnd ? maxIndex : Math.min(closestIndex, maxIndex);
				
				if (finalIndex !== currentIndex) {
					currentIndex = finalIndex;
					updateDots();
				}
			}, { passive: true });
		}

		/* Keyboard navigation - uses same bounded nextSlide/prevSlide that clamp to maxIndex.
		 * Prevents scrolling past carousel ends. */
		carousel.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowLeft') prevSlide();
			else if (e.key === 'ArrowRight') nextSlide();
		});

		// Initialize
		if (autoplayEnabled) startAutoplay();
	});
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAllCarousels);
} else {
	initAllCarousels();
}