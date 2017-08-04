console.log( 'js' );

var myBreakfast = 'bagel with veggie cream cheese';

var meals = [ 'grapefruit', 'protein bar', 'grilled cheese', 'tuna sandwich' ];

function singAboutBreakfast(){
  console.log( "Millie will now sing:", myBreakfast );
} // end function

function getMeal( index ){
  // console log out value in meals array at index
  console.log( meals[ index ] );
} // end function

function showMeals(){
  // loop through meals and console.log each
  console.log( 'in showMeals' );
  for (var i = 0; i < meals.length; i++) {
    console.log( meals[i] );
  } // end loop
} // end function
