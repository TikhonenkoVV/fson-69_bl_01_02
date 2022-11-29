(() => {
  const group = document.querySelector('.configurator__group');
  const chkboxS = document.querySelector('.configurator__checkbox--smaller');
  const chkboxM = document.querySelector('.configurator__checkbox--medium');
  const chkboxL = document.querySelector('.configurator__checkbox--larger');
  const imgBgr = document.querySelector('.configurator__img');
  const pathA =
    'https://raw.githubusercontent.com/TikhonenkoVV/prj-arch/main/img/';
  const srcA = imgBgr.src;
  const srcB = '';
  const srcC = '';
  const srcD = '';

  chkboxS.addEventListener('change', event => {
    imgBgr.src = srcB;
    srcA = srcB;
    console.log(srcA);
  });

  chkboxM.addEventListener('change', event => {
    imgBgr.src = srcC;
    srcA = srcC;
  });

  chkboxL.addEventListener('change', event => {
    imgBgr.src = srcD;
    srcA = srcD;
  });
  // group.addEventListener('click', event => {
  //   if (chkboxS.checked) {
  //     imgBgr.classList.toggle('smaller-bgr-img-chk');
  //   }
  //   if (chkboxM.checked) {
  //     imgBgr.classList.toggle('medium-bgr-img-chk');
  //   }
  //   if (chkboxL.checked) {
  //     imgBgr.classList.toggle('larger-bgr-img-chk');
  //   }
  // });

  group.addEventListener('mouseover', event => {
    if (event.target.classList.contains('configurator__label--smaller')) {
      const strA = 'home-1.png';
      const strB = pathA + strA;
      imgBgr.src = strB;
      srcB = strB;
    } else {
      if (event.target.classList.contains('configurator__label--medium')) {
        srcC = imgBgr.src = pathA + 'home-2.png';
      } else {
        if (event.target.classList.contains('configurator__label--larger')) {
          srcD = imgBgr.src = pathA + 'home-3.png';
        }
      }
    }
  });

  group.addEventListener('mouseout', event => {
    imgBgr.src = srcA;
  });

  // group.addEventListener('mouseout', event => {
  //   if (event.target.classList.contains('configurator__label--smaller')) {
  //     imgBgr.src = pathB;
  //   } else {
  //     if (event.target.classList.contains('configurator__label--medium')) {
  //       imgBgr.src = './images/home-2.png';
  //     } else {
  //       if (event.target.classList.contains('configurator__label--larger')) {
  //         imgBgr.src = './images/home-3.png';
  //       }
  //     }
  //   }
  // });
})();
