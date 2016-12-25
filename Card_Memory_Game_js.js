var array_of_numbers=[];
 var i, array_length=12;
 
//now, i need to generate 6 random numbers.
 var random_num;
 var j;
 var indices =[];


function my_repeat(array_of_numbers){
random_num = Math.round(Math.random() * array_length);
var elem_present = array_of_numbers.indexOf(random_num);

while(elem_present!=-1)
  {
      indices.push(elem_present);
      elem_present=array_of_numbers.indexOf(random_num, elem_present+1);
  }
  return indices.length;
}


var sample=100;

var len=0;
while(len!=12){
  console.log("Current length: "+len);
  var instances=0;
  indices=[];
  random_num = Math.round(Math.random() * 12);

var elem_present = array_of_numbers.indexOf(random_num);

while(elem_present!=-1)
  {
      indices.push(elem_present);
      elem_present=array_of_numbers.indexOf(random_num, elem_present+1);
      instances=instances+1;
  }

if(instances%2==0){
console.log("length of indices array was even.");
array_of_numbers.push(random_num);
array_of_numbers.push(random_num);
len=len+2;
}
else{
console.log("length of indices array was odd.");
 len=len+1;
  array_of_numbers.push(random_num);
}
}
 
  // console.log("The randomly generated number added is: "+random_num);
var j;
for(j=0;j<12;j++){
  console.log(array_of_numbers[j]);
}

console.log("The array of indices is: ");
var array_of_indices=[];

for(j=0;j<12;j++){
  random_index=Math.round(Math.random() * 11);
  array_of_indices.push(random_index);
}

for(j=0;j<12;j++){
  var orig_elem=array_of_numbers[j];
  var index=array_of_indices[j];
  var elem_at_index=array_of_numbers[index];
    console.log("The element chosen: "+orig_elem+" New index: "+index+"Element at that index before: "+elem_at_index);

    array_of_numbers[index]=orig_elem;
    array_of_numbers[j]=elem_at_index;
    
}

console.log("The shuffled array is: ");
for(j=0;j<12;j++){
  console.log(array_of_numbers[j]);
}

var cards_clicked=0;

function checkmatch(){
}
//now that we have a shuufled array of numbers, we need to assign these numbers to the cards.

$(document).ready(function(){
    
    $(".card").each(function(index){
        //$(this).attr("data-card-value", array_of_numbers[index]);
        $(this).attr("id", array_of_numbers[index]);
        $(this).addClass("unmatched");
        //$(this).attr("onClick", "checkmatch()");   //this is how you can add a function.
    })

    $(".card").click(function(){
      //alert("Hey!You just clicked me.");
      //$(this).html($(this).data("cardValue"));  //the value of the card is shown.
      $(this).addClass("selected");
      var card_value=$(this).attr("id");
      $(this).html(card_value);
      check_for_match();
    })

    function check_for_match(){
      if($(".selected").length==2){  //2 cards have been clicked.
          var value1=$(".selected").first().attr("id");
          var value2=$(".selected").last().attr("id");

          if(value1==value2){
            $(".selected").each(function(){
              $(this).animate({opacity: 0});
              $(this).removeClass("unmatched");
              $(this).addClass("match-made");
            });
            game_complete();
          }

          else{  //value1!=value2
            setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 1000);
          }
          }

           else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 5000);
        }
    }

function game_complete(){
  var matches=$(".match-made").length;
  if(matches==12){
    alert("You've won!");
  }
  
}
  });