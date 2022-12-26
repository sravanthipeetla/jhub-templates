let instructor = document.getElementById('instructor-nav');
let courses = document.getElementById('course-nav');
let learner = document.getElementById('learner-nav');
let addBtn = document.getElementById('add-btn');
let courseDetails = document.getElementById('courseDetails');
let description = document.getElementById('description');
let req = document.getElementById('req');
let courseCard = document.getElementById('courseCard');
let trainerDetails = document.getElementById('trainerDetails');
let instructorsFilter = document.getElementById('instructors_filter');
let learnerDetails = document.getElementById('learnerDetails');
let deleteIcon = document.getElementById('delete-icon');
let deleteCourseModal = document.getElementById('deleteCourseModal');
let deleteCancel = document.getElementById('deleteCancel');
let addLearnerModal = document.getElementById('addLearnerModal');
let addCourseCancel = document.getElementById('addCourseCancel');
let courseCardCont = document.getElementById('courseCardCont');
let trainerEyeIcon = document.getElementById('trainer-eye-icon');
let deleteTrainerModal = document.getElementById('deleteTrainerModal');
let deleteTrainerCancel = document.getElementById('deleteTrainerCancel');
let addLearnerCancel = document.getElementById('addLearnerCancel');
let singleUserBtn = document.getElementById('singleUser');
let multipleUserBtn = document.getElementById('multipleUser');
let singleLearner = document.getElementById('singleLearner');
let multipleLearners = document.getElementById('multipleLearners');
let modelTitle = document.getElementById('modelTitle');
let courses_ =[
    {
        id:1,
        courseName :'Data Science - Python and ML Basics',
        learnerCount : '123',
        trainer:'Sidhartha Chinthapally'
    },
    {
        id:2,
        courseName :'Python',
        learnerCount : '13',
        trainer:'Sravanthi Peetla'
    },
    {
        id:3,
        courseName :'Statistics',
        learnerCount : '12',
        trainer:'Sidhartha Chinthapally'
    },
    {
        id:4,
        courseName :'Data Science - Python and ML Basics',
        learnerCount : '103',
        trainer:'Sidhartha Chinthapally'
    },
    {
        id:5,
        courseName :'python',
        learnerCount : '11',
        trainer:'Sidhartha Chinthapally'
    },
    {
        id:6,
        courseName :'Data Science - Python and ML Basics',
        learnerCount : '93',
        trainer:'Sidhartha Chinthapally'
    },
]


function addAndAppendCourse(course) {
    let courseCardId = 'courseCard' + course.id;
    let courseCont = document.createElement('div');
    courseCont.classList.add('courseCard');
    courseCont.id = courseCardId;
    courseCardCont.appendChild(courseCont);

    let courseLeft = document.createElement('div');
    courseLeft.classList.add('course-card-left');
    courseCont.appendChild(courseLeft);

    let courseTitle = document.createElement('p');
    courseTitle.classList.add('course-title');
    courseLeft.appendChild(courseTitle);
    courseTitle.textContent = course.courseName;

    let arrangeRow = document.createElement('div');
    arrangeRow.classList.add('arrange-row');
    courseLeft.appendChild(arrangeRow);

    let arrangeCol = document.createElement('div');
    arrangeCol.classList.add('arrange-col');
    arrangeRow.appendChild(arrangeCol);

    let countTitle = document.createElement('span');
    countTitle.classList.add('learner-count-title');
    countTitle.textContent = 'Learner count';
    arrangeCol.appendChild(countTitle);
    let count = document.createElement('span');
    arrangeCol.appendChild(count);
    count.textContent = course.learnerCount;
    count.classList.add('learner-count');

    let arrangeColTrain = document.createElement('div');
    arrangeColTrain.classList.add('arrange-col');
    arrangeRow.appendChild(arrangeColTrain);

    let trainTitle = document.createElement('span');
    trainTitle.classList.add('learner-count-title');
    trainTitle.textContent = 'Trainer name';
    arrangeColTrain.appendChild(trainTitle);
    let trainName = document.createElement('span');
    arrangeColTrain.appendChild(trainName);
    trainName.textContent = course.trainer;
    trainName.classList.add('learner-count');

    let deleteIconCont = document.createElement('div');
    deleteIconCont.classList.add('delete-icon');
    let deleteIconI = document.createElement('img');
    deleteIconI.src = 'https://i.postimg.cc/prKj8HZB/delete.png';
    deleteIconCont.appendChild(deleteIconI);
    courseCont.appendChild(deleteIconCont);

}
for (let course of courses_) {
    addAndAppendCourse(course);
}

courses.onclick = function() {
    instructorsFilter.classList.add('stop-visible');
    addBtn.textContent = "Add Course";
    description.textContent = "You can manage Course details here.";
    instructor.classList.remove('active');
    courses.classList.add('active');
    learner.classList.remove('active');
    courseDetails.classList.remove('stop-visible');
    trainerDetails.classList.add('stop-visible');
    learnerDetails.classList.add('stop-visible');
}
instructor.onclick = function() {
    instructorsFilter.classList.remove('stop-visible');
    addBtn.textContent = "Add Trainer";
    description.textContent = "You can manage Trainer details here.";
    instructor.classList.add('active');
    courses.classList.remove('active');
    learner.classList.remove('active');
    courseDetails.classList.add('stop-visible');
    trainerDetails.classList.remove('stop-visible');
    learnerDetails.classList.add('stop-visible');
}
learner.onclick = function() {
    instructorsFilter.classList.add('stop-visible');
    addBtn.textContent = "Add Learners";
    description.textContent = "You can manage Learner details here.";
    instructor.classList.remove('active');
    courses.classList.remove('active');
    learner.classList.add('active');
    courseDetails.classList.add('stop-visible');
    trainerDetails.classList.add('stop-visible');
    learnerDetails.classList.remove('stop-visible');
}
deleteIcon.onclick=function(){
    deleteCourseModal.style.display='block';
}
deleteCancel.onclick=function(){
    deleteCourseModal.style.display = 'none';
}
addCourseCancel.onclick=function(){
    addCourseModal.style.display = 'none';
}
addBtn.onclick = function() {
    if (addBtn.textContent==="Add Course" || addBtn.textContent==="Add Trainer"){
    addCourseModal.style.display='block';
    modelTitle.textContent = addBtn.textContent;
    }
    else if (addBtn.textContent==="Add Learners"){
        addLearnerModal.style.display='block';
    }
}
trainerEyeIcon.onclick = function(){
    deleteTrainerModal.style.display ='block';
}
deleteTrainerCancel.onclick = function(){
    deleteTrainerModal.style.display ='none';
}
addLearnerCancel.onclick = function(){
    addLearnerModal.style.display = 'none';
}
singleUserBtn.onclick=function(){
    singleUserBtn.classList.add('learner-active');
    multipleUserBtn.classList.remove('learner-active');
    singleLearner.style.display='block';
    multipleLearners.style.display='none';
}
multipleUserBtn.onclick=function(){
    singleUserBtn.classList.remove('learner-active');
    multipleUserBtn.classList.add('learner-active');
    singleLearner.style.display='none';
    multipleLearners.style.display='block';
}
