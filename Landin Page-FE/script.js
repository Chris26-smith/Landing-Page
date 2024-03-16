var bulb = document.getElementById('image-overlay');
        var isOn = true;

        bulb.addEventListener('click', function() {
            if (isOn) {
                bulb.src = 'bulbdown.jpeg';
            } else {
                bulb.src = 'bulbup.jpeg';
            }
            isOn = !isOn;
        });