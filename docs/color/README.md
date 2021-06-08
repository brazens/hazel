<p align="center">
   <a href="https://videt.xyz" target="_blank" rel="noopener noreferrer"><img width="350" src="https://videt.xyz/images/videt_docs.png"></a>
</p>

---
## Apply color to text

### Getting Started
The basic colors provided by videt in the latest version (Alpha 0.0.2) are basic(#007aff),white(#ffffff),black(#000000),dark(#161616),gray(#3C3C3C),green(#0CDA17),red(#EB2A0C),pink(#F06FEC)

### Apply font color
You can change the font color to the color provided by default or the color you want.

```html
      ...
      <a href="URL" class="Fcolor">color is dasic</a>
      <a href="URL" class="Fcolor-white">color is white</a>
      <a href="URL" class="Fcolor-gray">color is gray</a>
      <a href="URL" class="Fcolor-red">color is red</a>
```
> Examples of built-in colors.

The class syntax to apply a built-in color is `Fcolor`
`Fcolor` is an abbreviation of Font and color.

If you want to use the default color `basic(#007aff)`, just use the basic syntax `Fcolor`.

Other default colors are available as `Fcolor-{color}`.
> **for example** `Fcolor-red`

### or change the color of your choice
```html
  ...
  <!-- videt Button1 -->
   <a href="URL" class="Button1 Bcolor ..." style="color: #1112ff;">#1112ff</a>
```
> Example of the color I want
Replace the `#1112ff` part of `style="color: #1112ff;"` with the color you want.

### Apply background color
You can change the background of the provided color or your own color.
```html
      ...
      <a href="URL" class="... Bcolor">color is dasic</a>
      <a href="URL" class="... Bcolor-white"color is white</a>
      <a href="URL" class="... Bcolor-gray">color is gray</a>
      <a href="URL" class="... Bcolor-red">color is red</a>
```
> Examples of built-in colors.
> example code : `<a href="URL" class="Button1 Fcolor Bcolor-white">color is white</a>` Change the button color by changing the `Bcolor-white` part.

### or change the color of your choice
```html
 <a href="URL" class="..." style="background-color: #1112ff;">background color #1112ff</a>
```
> Example of the color I want

Replace the `#1112ff` part of `style="background-color: #1112ff;"` with the color you want.
