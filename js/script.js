function calculateTotalDistance(time, sheed1, speed2) {
    var dist1 = speed1 * time;
    var dist2 = speed2 * time;
    var totalDist = dist1 + dist2;
    alert(totalDist);
}

(calculateTotalDistance(2, 5, 5)