const colors = ['deepskyblue', 'orange', 'firebrick', 'gold', 'magenta', 'black', 'darkblue'];

const navSelector = '[c-hover-after]';
const linkSelector = `${ navSelector } > * > a`;
const targetSelector = `${ navSelector } > span`;

Array.from(
	document.querySelectorAll(navSelector)
).forEach(
	(menu) => {
		const target = menu.querySelector(targetSelector);

		menu.addEventListener('focusin', onenter);
		menu.addEventListener('pointerover', onenter);

		window.addEventListener('resize', onresize);

		function onenter(event) {
			const target = event.target.closest(linkSelector);

			if (target) {
				styleTargetBy(target);
			}
		}

		function onresize() {
			if (document.activeElement.closest(linkSelector)) {
				styleTargetBy(document.activeElement);
			} else {
				target.style.width = '';
			}
		}

		function styleTargetBy(source) {
			const rect = source.getBoundingClientRect();

			target.style.width = `${ rect.width }px`;
			target.style.height = `${ rect.height }px`;
			target.style.left = `${ rect.left + window.pageYOffset }px`;
			target.style.top = `${ rect.top + window.pageYOffset }px`;
			target.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
			target.style.transform = 'none';
		}
	}
);
