(() => {
  const labelHoverS = document.querySelector('.configurator__label--smaller');
  const labelHoverM = document.querySelector('.configurator__label--medium');
  const labelHoverL = document.querySelector('.configurator__label--larger');
  // const chkBoxS = document.querySelector('.configurator__checkbox--smaller');
  // const chkBoxM = document.querySelector('.configurator__checkbox--smaller');
  // const chkBoxL = document.querySelector('.configurator__checkbox--smaller');
  const imgBgr = document.querySelector('.configurator__img');

  labelHoverS.onmouseenter = function () {
    imgBgr.classList.toggle('smaller-bgr-img');
  };

  labelHoverS.onmouseleave = function () {
    imgBgr.classList.toggle('smaller-bgr-img');
  };

  labelHoverM.onmouseenter = function () {
    imgBgr.classList.toggle('medium-bgr-img');
  };

  labelHoverM.onmouseleave = function () {
    imgBgr.classList.toggle('medium-bgr-img');
  };

  labelHoverL.onmouseenter = function () {
    imgBgr.classList.toggle('larger-bgr-img');
  };

  labelHoverL.onmouseleave = function () {
    imgBgr.classList.toggle('larger-bgr-img');
  };
})();
