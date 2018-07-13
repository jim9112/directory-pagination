 const studentList = document.querySelectorAll('.student-item');
 var pageNumber = 1;

// function controls what employees are displayed
function showPage(pageNumber){
    // sets all displays to none
    const studentList = document.querySelectorAll('.student-item');
    for(i=0; i< studentList.length; i++) {
        studentList[i].style.display = "none";
    }

    // variable determines where thin the directory the display will start 
    startingPoint = (pageNumber * 10 - 10);

    // loop through all employees and display the apropriate 10 for selected page
    for (i = 0; i < 10; i++) {
        if (startingPoint < studentList.length){
        studentList[startingPoint].style.display = "list-item";
        startingPoint++;
        }
    }
}

function appendPageLinks(studentList) {
    // determine how many pages for this student list
    numPages = Math.ceil(studentList.length / 10);

    // create a page link section
    document.querySelector('.page').innerHTML += '<div class="pagination"><ul></ul></div>';
    // add links based on amount of pages needed
    for (i=1; i <= numPages; i++) {
    document.querySelector('.pagination ul').innerHTML += '<li><a href="#">' + i + '</a></li>';
    }

    // initially sets the first page link class to active
    document.querySelector('.pagination ul li a').className = 'active';
    // add click functionality to links
    listItems = document.querySelectorAll('.pagination ul li a');
    listItems.forEach(function(item) {
        item.onclick = function(e) {
            //assign page number value based on link clicked
            pageNumber = this.innerText;
            // remove all previous classes on links
            for (i=0; i<listItems.length; i++){
                listItems[i].className = "";
            }
            // add active class to current link 
            this.className = "active";

            // run show page function when passed the selected page number
            showPage(pageNumber);
        }
      });
    }
// run show page funtion the first time to show first page on startup    


// listItems[1].className = 'active';
appendPageLinks(studentList);
showPage(pageNumber);