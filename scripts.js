let idnum = 0

document.addEventListener("DOMContentLoaded", function () {
    // add square button
    let button = document.createElement("button");
    button.innerHTML = "Add square";
    document.body.appendChild(button);


    // div to keep button from deleting
    let line = document.createElement('div');
    line.className = 'line';
    document.body.appendChild(line);


    // div black square with a counter
    let counter = 0;
    button.addEventListener("click", function () {
        counter++
        let blksquare = document.createElement('div');
        blksquare.classList.add('black-square');
        line.appendChild(blksquare);
        blksquare.id = counter


        // hover to show div id
        blksquare.addEventListener("mouseover", function () {
            blksquare.innerText = blksquare.id
        })

        //hover to remove div id
        blksquare.addEventListener("mouseout", function () {
            blksquare.innerText = ''
        })

        //color array to change colors
        blksquare.addEventListener("click", function () {
            let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
                '#E6B333', '#3366E6', '#999966'];
            blksquare.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)]

        })


        //double click remove boxes even and odd
        blksquare.addEventListener('dblclick', function () {
            blksquare.id = idnum;
            idnum++
            if (blksquare.id % 2 == 0) {
                if (blksquare.nextSibling != null) {
                    rmvEvenDiv();
                } else {
                    alert('Nothing there')
                }
            } else if (blksquare.id % 2 != 0) {
                if (blksquare.previousSibling != null) {
                    rmvOddDiv(blksquare);
                } else {
                    alert('Nothing there')
                }
            }


        })

        function rmvEvenDiv() {
            blksquare.parentNode.removeChild(blksquare.nextSibling);
        }

        function rmvOddDiv() {
            blksquare.parentNode.removeChild(blksquare.previousSibling)
        }
    })

})
