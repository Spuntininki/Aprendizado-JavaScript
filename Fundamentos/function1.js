function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(min)
    console.log(max)
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function addUp(num) {
	
    for (let i = 1; i <= num; i++) {
      console.log(i)
    }

      
  }

  console.log(addUp(4))