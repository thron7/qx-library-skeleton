/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is an API class of your custom library "lib"
 *
 * If you have added resources to your lib, remove the first '@' in the
 * following line to make use of them.
 * @@asset(lib/*)
 */
qx.Class.define("lib.ApiClass",
{
  extend : Object,

  construct : function()
  {
    // Call super class
    this.base(arguments);

  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  statics :
  {
    // Add members to the public API of your library class
    raiseAlert : function () {
        alert("Hello from qooxdoo lib!");
    }
  }
});
