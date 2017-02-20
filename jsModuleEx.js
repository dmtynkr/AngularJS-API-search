//Anonymous function to remove as many global variables as you can
(function() {
  var createWorker = function() {
   var workCounter = 0;
    var task1 = function() {
      workCounter += 1;
      console.log("Task1 " + workCounter);
    }

    var task2 = function() {
      workCounter += 1;
      console.log("Task2 " + workCounter);
    }

    return {
      job1: task1,
      job2: task2
    };

  };

  var work = createWorker();
  work.job1();
  work.job2();
  work.job1();
  work.job2();

}());