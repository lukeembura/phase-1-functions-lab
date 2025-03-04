function distanceFromHqInBlocks (block) {
  return Math.abs(block - 42);
}

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(someValue) {
  const hqLocation = 42;
  const distanceInBlocks = Math.abs(someValue - hqLocation);
  return distanceInBlocks * 264;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(start - destination);
  return distanceInBlocks * 264;
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}


