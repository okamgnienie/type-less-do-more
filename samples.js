
////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//      Samples for the presentation 'Type less do more.'     o   |\___/|     //
//      @author Przemyslaw Hardyn                              \  |*  * |     //
//                                                              \ | ><  |     //
// -------------------------------------------------------------------------- //
//                                                                            //
//                      CodeteCon 2015 - Cracow, Poland                       //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// Just cat:
var cat = '         /\___/\     What are you looking at?!         ' +
          '        | o   o |    Listen to him!                    ' +
          '        |  > <  |                                      ';

// Our well composed sandwich:
var sandwich = {
  bread: 'brown',
  salt: true,
  cheese: 'cheddar',
  bonusCheese: 'Hell yeah!',
  extras: ['tomatoes', 'bananas', 'concrete', 'milk']
};

/**
 * @function upgradeSandwich
 * @description Upgrade sandwich with salad.
 * @param {Object} sandwich - Your awesome sandwich.
 * @return {Object} - Even more awesome (and healthy) sandwich!
 */
function upgradeSandwich (sandwich) {
  // Add some salad:
  sandwich.salad = 'Just salad';

  // Yeah man lets return upgraded sandwich:
  return sandwich;
}
