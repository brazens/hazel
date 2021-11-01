/*
MIT License

Copyright (c) 2021 videt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
function test(){ 
  document.getElementby
}
class vinote extends HTMLElement{
  constructor(){
    super();
    this.style.borderRadius="2px";
    this.style.borderLeft="solid 3.5px rgb(0, 140, 255)";
    this.style.backgroundColor="rgb(245, 247, 247)";
    this.style.padding="13px 15px 13px 15px";
    this.style.display="block";
    this.style.margin="20px 0 20px 0";
    this.style.color="rgb(67, 79, 81)";
    this.style.fontSize="15px";
  }
}
class vibadge extends HTMLElement{
  constructor(){
    super();
    this.style.display="inline-block";
    this.style.borderRadius="4px";
    this.style.padding="8px 10px";
    this.style.lineHeight="1";
    this.style.textAlign="center";
    this.style.fontSize="60%";
    this.style.verticalAlign="baseline";
  }
}
class vitext1 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="42px";
  }
}
class vitext2 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="36px";
  }
}
class vitext3 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="32px";
  }
}
class vitext4 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="26px";
  }
}
class vitext5 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="24px";
  }
}
class vitext6 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="20px";
  }
}
class vitext7 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="18px";
  }
}
class vitext8 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="15px";
  }
}
class vitext9 extends HTMLElement{
  constructor(){
    super();
    this.style.fontSize="12px";
  }
}

customElements.define('vi-note',vinote);
customElements.define('vi-badge',vibadge);
customElements.define('vi-p1',vitext1);
customElements.define('vi-p2',vitext2);
customElements.define('vi-p3',vitext3);
customElements.define('vi-p4',vitext4);
customElements.define('vi-p5',vitext5);
customElements.define('vi-p6',vitext6);
customElements.define('vi-p7',vitext6);
customElements.define('vi-p8',vitext6);
customElements.define('vi-p9',vitext6);
document.body.style.margin = '0';
