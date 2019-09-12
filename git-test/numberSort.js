function myFunction() {
    const x = document.getElementById("x").value;
    console.log(x);
    const y = document.getElementById("y").value;
    console.log(y);
    const z = document.getElementById("z").value;
    console.log(z);

    if (x > y && x > z) {
        if (y > z) {
            console.log(x + ", " + y + ", " + z) 
            document.getElementById("demo").innerHTML = x + ", " + y + ", " + z;
            alert(x + " ," + y + " ," + z);
        } else {
            console.log(x + ", " + z + ", " + y);
            document.getElementById("demo").innerHTML = x + ", " + z + ", " + y;
            alert(x + " ," + z + " ," + y);
        }
    } else if (y > x && y > z) {
        if (x > z) {
            console.log(y + ", " + x + ", " + z);
            document.getElementById("demo").innerHTML = y + ", " + x + ", " + z;
        } else {
            console.log(y + ", " + z + ", " + x);
            document.getElementById("demo").innerHTML = y + ", " + z + ", " + x;
        }
    } else if (z > x && z > y) {
        if (x > y) {
            console.log(z + ", " + x + ", " + y);
            document.getElementById("demo").innerHTML = z + ", " + x + ", " + y;
        } else {
            console.log(z + ", " + y + ", " + x);
            document.getElementById("demo").innerHTML = z + ", " + y + ", " + x;
        }
    }
}
