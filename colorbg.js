document.addEventListener('DOMContentLoaded', function() {
    // Change background color randomly
    var colors = ['#626EAE', '#A07E77', '#96A8C2', '#7A9C84', '#720036'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    
    // Initially hide the positive image
    document.getElementById('positive').style.visibility = 'hidden';

    // Add event listeners for the visibility change of #positive
    document.getElementById('seeyousoon').addEventListener('mouseover', function() {
        document.getElementById('positive').style.visibility = 'visible';
    });

    document.getElementById('seeyousoon').addEventListener('mouseout', function() {
        document.getElementById('positive').style.visibility = 'hidden';
    });
});
