 const studentList = document.querySelectorAll('.student-item');
 var pageNumber = 1;


function showPage(pageNumber){
    const test = document.querySelectorAll('.student-item');
    for(i=0; i< test.length; i++) {
        test[i].style.display = "none";
    }
    startingPoint = (pageNumber * 10 - 10);
    for (i = 0; i < 10; i++) {
        test[startingPoint].style.display = "list-item";
        startingPoint++;
    }
}

function appendPageLinks(studentList) {
    numPages = Math.ceil(studentList.length / 10);// determine how many pages for this student list
    document.querySelector('.page').innerHTML += '<div class="pagination"><ul></ul></div>';// create a page link section
    for (i=1; i <= numPages; i++) {
        document.querySelector('.pagination ul').innerHTML += '<li><a href="#">' + i + '</a></li>';
    }
    
    listItems = document.querySelectorAll('.pagination ul li a');
    
    listItems.forEach(function(item) {
        item.onclick = function(e) {
            pageNumber = this.innerText;
           console.log();
           this.className = "active";
           showPage(pageNumber);
           
           
        }
      });
    
    }
showPage(pageNumber);
appendPageLinks(studentList);
studentList[1].style.display = "list-item";