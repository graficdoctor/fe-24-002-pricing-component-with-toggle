const annualPrice = document.querySelectorAll('.annual');
const monthlyPrice = document.querySelectorAll('.monthly');
const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', function () {
	annualPrice.forEach((price) => {
		price.style.display = toggleSwitch.checked ? 'none' : 'inline-block';
	});

	monthlyPrice.forEach((monthly) => {
		monthly.style.display = toggleSwitch.checked ? 'inline-block' : 'none';
	});
});
