/** 
@author Amadeus Min
@studentNumber #300159477
*/

//Decalaring const variables
const numberOfProfilesPerPage = 10;

const arrayContactLists = Array.from(document.querySelectorAll(`li`));
const nodeContactListAll = document.querySelectorAll(`li`);
const container = document.querySelector(`.contact-list`);
const emptyItem = document.createElement('li');
const buttonContainer = document.querySelector('.button-display');

//Basic math calculations
const numberOfProfiles = arrayContactLists.length;
const numberOfProfilesPageDivider = numberOfProfiles / numberOfProfilesPerPage;
const numberOfButtons = Math.ceil(numberOfProfilesPageDivider);
const numberOfProfilesInTheLastPage = numberOfProfiles % numberOfProfilesPerPage;

//This will create the page buttons including it's HTML properties according to the total number of profiles and the number of profiles per page.
for (var i = 0; i < numberOfButtons; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i + 1;
    btn.value = i + 1;
    btn.onclick = function callDisplay() {
        display(this);
    }
    buttonContainer.appendChild(btn);
}

//Add null value to the newItem.
emptyItem.innerHTML = "";

//This will clear the profile lists on the web page.
for (var i = 0; i < numberOfProfiles; i++) {
    nodeContactListAll[i].parentNode.replaceChild(emptyItem, nodeContactListAll[i]);
}

//This will insert the first group of profile lists to the container when the app starts according to a user's selected numberOfProfilesPerPage value.
//When a user's selected numberOfProfilesPerPage is greater than the total number of profiles,
if (numberOfProfilesPerPage > numberOfProfiles) {
    for (var i = numberOfProfiles - 1; i >= 0; i--) {
        container.insertAdjacentElement('afterbegin', arrayContactLists[i]);
    }
}
//When a user's selected numberOfProfilesPerPage is less than the totla number of profiles,
else {

    for (var i = numberOfProfilesPerPage - 1; i >= 0; i--) {
        container.insertAdjacentElement('afterbegin', arrayContactLists[i]);
    }
}

//This function will display a specific group of profiles according to user's selected buttons.
function display(e) {

    var nodeContactListAll = document.querySelectorAll(`li`);

    //clearing the container before displaying.
    for (var i = 0; i < nodeContactListAll.length; i++) {
        nodeContactListAll[i].parentNode.replaceChild(emptyItem, nodeContactListAll[i]);
    }

    //Index calculation according to user's selected button's value.
    for (var i = 0; i < numberOfButtons; i++) {
        if (e.value == (i + 1)) {
            var s = (((i + 1) * numberOfProfilesPerPage) - 1);
        }
    }

    //Using the calculated index "s", insert group of porfiles to the container.
    //When each page can be displayed the same number of profiles,
    if (numberOfProfilesPageDivider == numberOfButtons) {
        for (var t = s; t >= (s - (numberOfProfilesPerPage - 1)); t--) {
            container.insertAdjacentElement('afterbegin', arrayContactLists[t]);
        }
    }
    //When the last page can be displayed the different number of profiles,
    else {
        //Displaying the full group of profiles first according to the value of numberOfProfilesPerPage.
        if (e.value <= Math.floor(numberOfProfilesPageDivider)) {
            for (var t = s; t >= (s - (numberOfProfilesPerPage - 1)); t--) {
                container.insertAdjacentElement('afterbegin', arrayContactLists[t]);
            }
        }
        //Displaying the rest number of the profiles which is less than the value of numberOfProfilesPerPage.
        else {
            for (var t = s - (numberOfProfilesPerPage - numberOfProfilesInTheLastPage); t >= (s - (numberOfProfilesPerPage - 1)); t--) {
                container.insertAdjacentElement('afterbegin', arrayContactLists[t]);
            }
        }
    }
}
