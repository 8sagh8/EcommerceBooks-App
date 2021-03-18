/*-----------------------------------
  Name- Dure Shawar Abbas
  Studentid- 010109148
  email - dsnotapplicable@myseneca.ca
  Final Assignment
  Link:    https://web222-final-assignment.dure-shawar-abbas.vercel.app/ 
  
-------------------------------------*/
/* Add any JavaScript you need to this file. */

/* creating Array of Items selected to checkout */
let array_items = [];
let array_price = [];
let array_quantity = [];

/* Number of Items Picked for Checkout */
let _item_picked = 0;

/* Importing all anchors of Categories */
let cat00_button = document.querySelector('#a_cat00');
let cat01_button = document.querySelector('#a_cat01');
let cat02_button = document.querySelector('#a_cat02');
let cat03_button = document.querySelector('#a_cat03');
let cat04_button = document.querySelector('#a_cat04');
let cat05_button = document.querySelector('#a_cat05');
let cat06_button = document.querySelector('#a_cat06');
let home_button = document.querySelector('#home');
let aboutUs_button = document.querySelector('#aboutUs');

/* Importing all Categories Div & Body Logo Div by their IDs */
let _logo = document.querySelector('#hidden');
let cat_1 = document.querySelector('#catDiv01');
let cat_2 = document.querySelector('#catDiv02');
let cat_3 = document.querySelector('#catDiv03');
let cat_4 = document.querySelector('#catDiv04');
let cat_5 = document.querySelector('#catDiv05');
let cat_6 = document.querySelector('#checkOut');
let aboutUs = document.querySelector('#aboutUsDiv_1');

let item_p = document.querySelector('#itemValue');

/* Default State at Window Load Time */
let default_cat = () => {
  item_p.innerHTML = _item_picked;
  cat_1.style.display = 'none';
  cat_2.style.display = 'none';
  cat_3.style.display = 'none';
  cat_4.style.display = 'none';
  cat_5.style.display = 'none';
  cat_6.style.display = 'none';
  aboutUs.style.display = 'none';

  _logo.style.display = 'block';
};

window.addEventListener('load', default_cat);
cat00_button.addEventListener('click', default_cat);
home_button.addEventListener('click', default_cat);

///////////About US /////////////
let aboutUs_function = () => {
  item_p.innerHTML = _item_picked;
  cat_1.style.display = 'none';
  cat_2.style.display = 'none';
  cat_3.style.display = 'none';
  cat_4.style.display = 'none';
  cat_5.style.display = 'none';
  cat_6.style.display = 'none';
  aboutUs.style.display = 'block';

  _logo.style.display = 'none';
};
aboutUs_button.addEventListener('click', aboutUs_function);

/////////// FUNCTIONS ///////////
/*** add item in array ***/
let add_In_Array = (catNum, itemNum) => {
  let item_id = 'catDiv0' + catNum + '_item0' + itemNum;
  let index = array_items.indexOf(item_id);
  if (index < 0) {
    array_items.push(item_id);
    _item_picked = _item_picked + 1;
    item_p.innerHTML = _item_picked;
  }
};

/*** remove item from array ***/
let remove_from_Array = (catNum, itemNum) => {
  let index = array_items.indexOf('catDiv0' + catNum + '_item0' + itemNum);
  if (index > -1) {
    array_quantity.splice(index, 1);
    array_items.splice(index, 1);
    _item_picked = _item_picked - 1;
    item_p.innerHTML = _item_picked;
  }
};

////// DONE -- FUNCTIONS //////

/* Display Category 01 only and hide remaining div */
let display_cat_01 = () => {
  /* Display and Hide Categories */
  cat_1.style.display = 'block';
  cat_2.style.display = 'none';
  cat_3.style.display = 'none';
  cat_4.style.display = 'none';
  cat_5.style.display = 'none';
  cat_6.style.display = 'none';
  aboutUs.style.display = 'none';

  _logo.style.display = 'none';

  /* Import button = addtoCart  and removefromCart */
  let cat_butt_1a = document.querySelector('#cat_01_Butt_01a');
  let cat_butt_1b = document.querySelector('#cat_01_Butt_01b');
  let cat_butt_2a = document.querySelector('#cat_01_Butt_02a');
  let cat_butt_2b = document.querySelector('#cat_01_Butt_02b');
  let cat_butt_3a = document.querySelector('#cat_01_Butt_03a');
  let cat_butt_3b = document.querySelector('#cat_01_Butt_03b');
  let cat_butt_4a = document.querySelector('#cat_01_Butt_04a');
  let cat_butt_4b = document.querySelector('#cat_01_Butt_04b');
  let cat_butt_5a = document.querySelector('#cat_01_Butt_05a');
  let cat_butt_5b = document.querySelector('#cat_01_Butt_05b');
  let cat_butt_6a = document.querySelector('#cat_01_Butt_06a');
  let cat_butt_6b = document.querySelector('#cat_01_Butt_06b');

  /* to add values in array step one : if "Add to Cart" button clicked */
  cat_butt_1a.addEventListener('click', () => {
    add_In_Array(1, 1);
  });
  cat_butt_2a.addEventListener('click', () => {
    add_In_Array(1, 2);
  });
  cat_butt_3a.addEventListener('click', () => {
    add_In_Array(1, 3);
  });
  cat_butt_4a.addEventListener('click', () => {
    add_In_Array(1, 4);
  });
  cat_butt_5a.addEventListener('click', () => {
    add_In_Array(1, 5);
  });
  cat_butt_6a.addEventListener('click', () => {
    add_In_Array(1, 6);
  });

  /* to remove values from array step one : if "Remove from cart" button clicked */
  cat_butt_1b.addEventListener('click', () => {
    remove_from_Array(1, 1);
  });
  cat_butt_2b.addEventListener('click', () => {
    remove_from_Array(1, 2);
  });
  cat_butt_3b.addEventListener('click', () => {
    remove_from_Array(1, 3);
  });
  cat_butt_4b.addEventListener('click', () => {
    remove_from_Array(1, 4);
  });
  cat_butt_5b.addEventListener('click', () => {
    remove_from_Array(1, 5);
  });
  cat_butt_6b.addEventListener('click', () => {
    remove_from_Array(1, 6);
  });
};

cat01_button.addEventListener('click', display_cat_01);

/* Display Category 02 only and hide remaining div */
let display_cat_02 = () => {
  cat_1.style.display = 'none';
  cat_2.style.display = 'block';
  cat_3.style.display = 'none';
  cat_4.style.display = 'none';
  cat_5.style.display = 'none';
  cat_6.style.display = 'none';
  aboutUs.style.display = 'none';

  _logo.style.display = 'none';

  /* Import button = addtoCart  and removefromCart */
  let cat_butt_1a = document.querySelector('#cat_02_Butt_01a');
  let cat_butt_1b = document.querySelector('#cat_02_Butt_01b');
  let cat_butt_2a = document.querySelector('#cat_02_Butt_02a');
  let cat_butt_2b = document.querySelector('#cat_02_Butt_02b');
  let cat_butt_3a = document.querySelector('#cat_02_Butt_03a');
  let cat_butt_3b = document.querySelector('#cat_02_Butt_03b');
  let cat_butt_4a = document.querySelector('#cat_02_Butt_04a');
  let cat_butt_4b = document.querySelector('#cat_02_Butt_04b');
  let cat_butt_5a = document.querySelector('#cat_02_Butt_05a');
  let cat_butt_5b = document.querySelector('#cat_02_Butt_05b');
  let cat_butt_6a = document.querySelector('#cat_02_Butt_06a');
  let cat_butt_6b = document.querySelector('#cat_02_Butt_06b');

  /* to add values in array step one : if add to "cart button" clicked */
  cat_butt_1a.addEventListener('click', () => {
    add_In_Array(2, 1);
  });
  cat_butt_2a.addEventListener('click', () => {
    add_In_Array(2, 2);
  });
  cat_butt_3a.addEventListener('click', () => {
    add_In_Array(2, 3);
  });
  cat_butt_4a.addEventListener('click', () => {
    add_In_Array(2, 4);
  });
  cat_butt_5a.addEventListener('click', () => {
    add_In_Array(2, 5);
  });
  cat_butt_6a.addEventListener('click', () => {
    add_In_Array(2, 6);
  });

  /* to remove values from array step one : if "Remove from cart" button clicked */
  cat_butt_1b.addEventListener('click', () => {
    remove_from_Array(2, 1);
  });
  cat_butt_2b.addEventListener('click', () => {
    remove_from_Array(2, 2);
  });
  cat_butt_3b.addEventListener('click', () => {
    remove_from_Array(2, 3);
  });
  cat_butt_4b.addEventListener('click', () => {
    remove_from_Array(2, 4);
  });
  cat_butt_5b.addEventListener('click', () => {
    remove_from_Array(2, 5);
  });
  cat_butt_6b.addEventListener('click', () => {
    remove_from_Array(2, 6);
  });
};

cat02_button.addEventListener('click', display_cat_02);

/* Display Category 03 only and hide remaining div */
let display_cat_03 = () => {
  cat_1.style.display = 'none';
  cat_2.style.display = 'none';
  cat_3.style.display = 'block';
  cat_4.style.display = 'none';
  cat_5.style.display = 'none';
  cat_6.style.display = 'none';
  aboutUs.style.display = 'none';

  _logo.style.display = 'none';

  /* Import button = addtoCart  and removefromCart */
  let cat_butt_1a = document.querySelector('#cat_03_Butt_01a');
  let cat_butt_1b = document.querySelector('#cat_03_Butt_01b');
  let cat_butt_2a = document.querySelector('#cat_03_Butt_02a');
  let cat_butt_2b = document.querySelector('#cat_03_Butt_02b');
  let cat_butt_3a = document.querySelector('#cat_03_Butt_03a');
  let cat_butt_3b = document.querySelector('#cat_03_Butt_03b');
  let cat_butt_4a = document.querySelector('#cat_03_Butt_04a');
  let cat_butt_4b = document.querySelector('#cat_03_Butt_04b');
  let cat_butt_5a = document.querySelector('#cat_03_Butt_05a');
  let cat_butt_5b = document.querySelector('#cat_03_Butt_05b');
  let cat_butt_6a = document.querySelector('#cat_03_Butt_06a');
  let cat_butt_6b = document.querySelector('#cat_03_Butt_06b');

  /* to add values in array step one : if add to "cart button" clicked */
  cat_butt_1a.addEventListener('click', () => {
    add_In_Array(3, 1);
  });
  cat_butt_2a.addEventListener('click', () => {
    add_In_Array(3, 2);
  });
  cat_butt_3a.addEventListener('click', () => {
    add_In_Array(3, 3);
  });
  cat_butt_4a.addEventListener('click', () => {
    add_In_Array(3, 4);
  });
  cat_butt_5a.addEventListener('click', () => {
    add_In_Array(3, 5);
  });
  cat_butt_6a.addEventListener('click', () => {
    add_In_Array(3, 6);
  });

  /* to remove values from array step one : if "Remove from cart" button clicked */
  cat_butt_1b.addEventListener('click', () => {
    remove_from_Array(3, 1);
  });
  cat_butt_2b.addEventListener('click', () => {
    remove_from_Array(3, 2);
  });
  cat_butt_3b.addEventListener('click', () => {
    remove_from_Array(3, 3);
  });
  cat_butt_4b.addEventListener('click', () => {
    remove_from_Array(3, 4);
  });
  cat_butt_5b.addEventListener('click', () => {
    remove_from_Array(3, 5);
  });
  cat_butt_6b.addEventListener('click', () => {
    remove_from_Array(3, 6);
  });
};

cat03_button.addEventListener('click', display_cat_03);

/* Display Category 04 only and hide remaining div */
let display_cat_04 = () => {
  cat_1.style.display = 'none';
  cat_2.style.display = 'none';
  cat_3.style.display = 'none';
  cat_4.style.display = 'block';
  cat_5.style.display = 'none';
  cat_6.style.display = 'none';
  aboutUs.style.display = 'none';

  _logo.style.display = 'none';

  /* Import button = addtoCart  and removefromCart */
  let cat_butt_1a = document.querySelector('#cat_04_Butt_01a');
  let cat_butt_1b = document.querySelector('#cat_04_Butt_01b');
  let cat_butt_2a = document.querySelector('#cat_04_Butt_02a');
  let cat_butt_2b = document.querySelector('#cat_04_Butt_02b');
  let cat_butt_3a = document.querySelector('#cat_04_Butt_03a');
  let cat_butt_3b = document.querySelector('#cat_04_Butt_03b');
  let cat_butt_4a = document.querySelector('#cat_04_Butt_04a');
  let cat_butt_4b = document.querySelector('#cat_04_Butt_04b');
  let cat_butt_5a = document.querySelector('#cat_04_Butt_05a');
  let cat_butt_5b = document.querySelector('#cat_04_Butt_05b');
  let cat_butt_6a = document.querySelector('#cat_04_Butt_06a');
  let cat_butt_6b = document.querySelector('#cat_04_Butt_06b');

  /* to add values in array step one : if add to "cart button" clicked */
  cat_butt_1a.addEventListener('click', () => {
    add_In_Array(4, 1);
  });
  cat_butt_2a.addEventListener('click', () => {
    add_In_Array(4, 2);
  });
  cat_butt_3a.addEventListener('click', () => {
    add_In_Array(4, 3);
  });
  cat_butt_4a.addEventListener('click', () => {
    add_In_Array(4, 4);
  });
  cat_butt_5a.addEventListener('click', () => {
    add_In_Array(4, 5);
  });
  cat_butt_6a.addEventListener('click', () => {
    add_In_Array(4, 6);
  });

  /* to remove values from array step one : if "Remove from cart" button clicked */
  cat_butt_1b.addEventListener('click', () => {
    remove_from_Array(4, 1);
  });
  cat_butt_2b.addEventListener('click', () => {
    remove_from_Array(4, 2);
  });
  cat_butt_3b.addEventListener('click', () => {
    remove_from_Array(4, 3);
  });
  cat_butt_4b.addEventListener('click', () => {
    remove_from_Array(4, 4);
  });
  cat_butt_5b.addEventListener('click', () => {
    remove_from_Array(4, 5);
  });
  cat_butt_6b.addEventListener('click', () => {
    remove_from_Array(4, 6);
  });
};

cat04_button.addEventListener('click', display_cat_04);

/* Display Category 05 only and hide remaining div */
let display_cat_05 = () => {
  cat_1.style.display = 'none';
  cat_2.style.display = 'none';
  cat_3.style.display = 'none';
  cat_4.style.display = 'none';
  cat_5.style.display = 'block';
  cat_6.style.display = 'none';
  aboutUs.style.display = 'none';

  _logo.style.display = 'none';

  /* Import button = addtoCart  and removefromCart */
  let cat_butt_1a = document.querySelector('#cat_05_Butt_01a');
  let cat_butt_1b = document.querySelector('#cat_05_Butt_01b');
  let cat_butt_2a = document.querySelector('#cat_05_Butt_02a');
  let cat_butt_2b = document.querySelector('#cat_05_Butt_02b');
  let cat_butt_3a = document.querySelector('#cat_05_Butt_03a');
  let cat_butt_3b = document.querySelector('#cat_05_Butt_03b');
  let cat_butt_4a = document.querySelector('#cat_05_Butt_04a');
  let cat_butt_4b = document.querySelector('#cat_05_Butt_04b');
  let cat_butt_5a = document.querySelector('#cat_05_Butt_05a');
  let cat_butt_5b = document.querySelector('#cat_05_Butt_05b');
  let cat_butt_6a = document.querySelector('#cat_05_Butt_06a');
  let cat_butt_6b = document.querySelector('#cat_05_Butt_06b');

  /* to add values in array step one : if add to "cart button" clicked */
  cat_butt_1a.addEventListener('click', () => {
    add_In_Array(5, 1);
  });
  cat_butt_2a.addEventListener('click', () => {
    add_In_Array(5, 2);
  });
  cat_butt_3a.addEventListener('click', () => {
    add_In_Array(5, 3);
  });
  cat_butt_4a.addEventListener('click', () => {
    add_In_Array(5, 4);
  });
  cat_butt_5a.addEventListener('click', () => {
    add_In_Array(5, 5);
  });
  cat_butt_6a.addEventListener('click', () => {
    add_In_Array(5, 6);
  });

  /* to remove values from array step one : if "Remove from cart" button clicked */
  cat_butt_1b.addEventListener('click', () => {
    remove_from_Array(5, 1);
  });
  cat_butt_2b.addEventListener('click', () => {
    remove_from_Array(5, 2);
  });
  cat_butt_3b.addEventListener('click', () => {
    remove_from_Array(5, 3);
  });
  cat_butt_4b.addEventListener('click', () => {
    remove_from_Array(5, 4);
  });
  cat_butt_5b.addEventListener('click', () => {
    remove_from_Array(5, 5);
  });
  cat_butt_6b.addEventListener('click', () => {
    remove_from_Array(5, 6);
  });
};

cat05_button.addEventListener('click', display_cat_05);

/* Display Category "CHECKOUT" only and hide remaining div */
let display_cat_06 = () => {
  cat_1.style.display = 'none';
  cat_2.style.display = 'none';
  cat_3.style.display = 'none';
  cat_4.style.display = 'none';
  cat_5.style.display = 'none';
  cat_6.style.display = 'block';
  aboutUs.style.display = 'none';

  _logo.style.display = 'none';

  /***************************/
  let no_item = document.querySelector('#checkout_No_Items_Div');
  let with_item = document.querySelector('#checkout_With_Items_Div');
  let a_cal_price = document.querySelector('#a_cal_price');

  if (_item_picked === 0) {
    no_item.style.display = 'block';
    with_item.style.display = 'none';
  } else {
    if (array_quantity.length === 0) {
      for (let i = 0; i < _item_picked; i++) {
        array_quantity[i] = 1;
      }
    } else if (array_quantity.length < _item_picked) {
      let index = _item_picked - array_quantity.length - 1;
      for (index; index < _item_picked; index++) {
        array_quantity[index] = 1;
      }
    }

    let additionalPricing = document.querySelector('#additionalPricing');
    additionalPricing.style.display = 'none';
    no_item.style.display = 'none';
    with_item.style.display = 'block';
    let main_Items_Div = document.querySelector('#main_Items_Div');
    main_Items_Div.innerHTML = ''; // to clean all the printed items from checkout page

    ////////// clearn prices from array everytime when checkout page will open ////////
    for (let i = 0; i < _item_picked; i++) {
      array_price[i] = 0;
    }

    let _heading_title = document.createElement('span');
    _heading_title.setAttribute('id', 'titleHeading');
    _heading_title.innerHTML = 'Book Title';
    main_Items_Div.appendChild(_heading_title);

    let _heading_quantity = document.createElement('span');
    _heading_quantity.setAttribute('id', 'quantityHeading');
    _heading_quantity.innerHTML = 'Quantity';
    main_Items_Div.appendChild(_heading_quantity);

    let _heading_Item_Price = document.createElement('span');
    _heading_Item_Price.setAttribute('id', 'priceHeading');
    _heading_Item_Price.innerHTML = 'Price';
    main_Items_Div.appendChild(_heading_Item_Price);

    let _heading_Total_Per_Item = document.createElement('span');
    _heading_Total_Per_Item.setAttribute('id', 'totalItemHeading');
    _heading_Total_Per_Item.innerHTML = 'Price per Item';
    main_Items_Div.appendChild(_heading_Total_Per_Item);

    for (let i = 0; i < _item_picked; ++i) {
      let _div = document.createElement('div');
      _div.setAttribute('class', 'divOut');
      let _span_Cancel = document.createElement('span');
      _span_Cancel.setAttribute('class', 'cancelOut');
      let _span_Item_Name = document.createElement('span');
      _span_Item_Name.setAttribute('class', 'titleOut');
      let _span_Item_Quantity = document.createElement('span');
      _span_Item_Quantity.setAttribute('class', 'quantityOut');
      let _span_multiply = document.createElement('span');
      _span_multiply.setAttribute('class', 'multiplyOut');
      let _span_Item_Price = document.createElement('span');
      _span_Item_Price.setAttribute('class', 'priceOut');
      let _span_EqualTo = document.createElement('span');
      _span_EqualTo.setAttribute('class', 'equalToOut');
      let _span_Total_Per_Item = document.createElement('span');
      _span_Total_Per_Item.setAttribute('class', 'totalItemOut');

      // title of book
      let _title_Id = '#' + array_items[i] + ' div > .underImage > .descDiv > h3';
      let _title_name = document.querySelector(_title_Id).innerHTML;
      _span_Item_Name.innerHTML = _title_name;
      _div.appendChild(_span_Item_Name);
      main_Items_Div.appendChild(_div);

      // quantity selection
      //// "MINUS-BUTTON" followed by "QUANTITY INPUT" followed by "PLUS BUTTON"
      let _minus_button = document.createElement('input');
      _minus_button.setAttribute('id', '_minus_' + i + 1 + '_button');
      _minus_button.setAttribute('class', '_minus_button');
      _minus_button.setAttribute('type', 'button');
      _minus_button.setAttribute('value', '-');
      let _input = document.createElement('span');
      _input.innerHTML = array_quantity[i];
      _input.setAttribute('id', '_input_' + i + 1 + '_span');
      _input.setAttribute('class', '_input_span');
      let _plus_button = document.createElement('input');
      _plus_button.setAttribute('id', '_plus_' + i + 1 + '_button');
      _plus_button.setAttribute('class', '_plus_button');
      _plus_button.setAttribute('type', 'button');
      _plus_button.setAttribute('value', '+');
      _span_Item_Quantity.appendChild(_minus_button);
      _span_Item_Quantity.appendChild(_input);
      _span_Item_Quantity.appendChild(_plus_button);
      _div.appendChild(_span_Item_Quantity);
      main_Items_Div.appendChild(_div);

      // multiply sign
      _span_multiply.innerHTML = 'x';
      _div.appendChild(_span_multiply);
      main_Items_Div.appendChild(_div);

      // price of item
      _title_Id = '#' + array_items[i] + ' div > .underImage > .descDiv > p > span';
      let _item_price = document.querySelector(_title_Id).innerHTML;
      _span_Item_Price.innerHTML = _item_price;
      _div.appendChild(_span_Item_Price);
      main_Items_Div.appendChild(_div);

      // equal to sign
      _span_EqualTo.innerHTML = '=';
      _div.appendChild(_span_EqualTo);
      main_Items_Div.appendChild(_div);

      // total item price
      let new_price = array_quantity[i] * _item_price;
      _span_Total_Per_Item.innerHTML = new_price.toFixed(2);
      array_price[i] = new_price; //price array
      _div.appendChild(_span_Total_Per_Item);
      main_Items_Div.appendChild(_div);

      _span_Cancel.innerHTML = 'X';
      _div.appendChild(_span_Cancel);
      main_Items_Div.appendChild(_div);
    }

    ///////////// Quantity Values by USER //////////
    let plus_b_array = [];
    let minus_b_array = [];
    let input_s_array = [];

    for (let i = 0; i < _item_picked; ++i) {
      plus_b_array.push(document.querySelector('_plus_' + i + 1 + '_button'));
      minus_b_array.push(document.querySelector('_minus_' + i + 1 + '_button'));
      input_s_array.push(document.querySelector('_input_' + i + 1 + '_span'));
    }

    ///// buttons and final pricing div ////////

    let fun_cal_price = () => {
      additionalPricing.style.display = 'block';
      let cal_div = document.querySelector('#before_tax');
      let gst_ = document.querySelector('#gst_');
      let final_amount = document.querySelector('#final_amount');

      let before_tax = 0;
      let _gst = 13 / 100;

      for (let i = 0; i < _item_picked; i++) {
        before_tax = before_tax + array_price[i];
      }

      cal_div.innerHTML = before_tax.toFixed(2);
      if (before_tax > 0) {
        _gst = before_tax * _gst;
      } else {
        _gst = 0;
      }

      gst_.innerHTML = _gst.toFixed(2);

      final_amount.innerHTML = (_gst + before_tax).toFixed(2);
    };

    a_cal_price.addEventListener('click', fun_cal_price);
  }
};
cat06_button.addEventListener('click', display_cat_06);
