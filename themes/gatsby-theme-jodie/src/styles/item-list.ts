export const itemListWrapperStyles = {
  ".item-list": {
    display: `grid`,
    gridAutoRows: `auto`,
  },
  "@media screen and (min-width: 40em)": {
    ".item-list": { gridTemplateColumns: `repeat(2, minmax(0, 1fr))` },
    ".div2 .item,.div3 .item:nth-of-type(3n+1),.div4 .item:nth-of-type(4n+1),.div4 .item:nth-of-type(4n+4),.div5 .item:nth-of-type(5n+1),.div6 .item:nth-of-type(3n+1),.div7 .item:nth-of-type(7n+1),.div7 .item:nth-of-type(7n+4),.div7 .item:nth-of-type(7n+7),.div8 .item:nth-of-type(4n+1),.div8 .item:nth-of-type(4n+4),.div9 .item:nth-of-type(3n+1)": {
      gridColumn: `auto / span 2`,
    },
  },
  "@media screen and (min-width: 1280px)": {
    ".item-list": { gridTemplateColumns: `repeat(3, minmax(0, 1fr))` },
    ".div4 .item:nth-of-type(12n+2),.div4 .item:nth-of-type(12n+11),.div5 .item:nth-of-type(15n+2),.div5 .item:nth-of-type(15n+13),.div7 .item:nth-of-type(7n+2),.div7 .item:nth-of-type(7n+6),.div8 .item:nth-of-type(12n+2),.div8 .item:nth-of-type(12n+11),.div9 .item:nth-of-type(9n+2),.div9 .item:nth-of-type(9n+7)": {
      gridRow: `auto / span 2`,
    },
    ".div3 .item:nth-of-type(6n+3),.div3 .item:nth-of-type(6n+5),.div4 .item:nth-of-type(12n+3),.div4 .item:nth-of-type(12n+4),.div4 .item:nth-of-type(12n+10),.div4 .item:nth-of-type(12n+12),.div5 .item:nth-of-type(15n+3),.div5 .item:nth-of-type(15n+4),.div5 .item:nth-of-type(15n+12),.div5 .item:nth-of-type(15n+14),.div6 .item:nth-of-type(12n+6),.div6 .item:nth-of-type(12n+11),.div7 .item:nth-of-type(7n+3),.div7 .item:nth-of-type(7n+4),.div7 .item:nth-of-type(7n+5),.div7 .item:nth-of-type(7n+7),.div8 .item:nth-of-type(12n+3),.div8 .item:nth-of-type(12n+4),.div8 .item:nth-of-type(12n+10),.div8 .item:nth-of-type(12n+12),.div9 .item:nth-of-type(9n+3),.div9 .item:nth-of-type(9n+4),.div9 .item:nth-of-type(9n+5),.div9 .item:nth-of-type(9n+8),.div9 .item:nth-of-type(9n+9)": {
      gridColumn: `auto / span 2`,
    },
    ".div2 .item,.div3 .item:nth-of-type(6n+1),.div3 .item:nth-of-type(6n+4),.div4 .item:nth-of-type(12n+1),.div4 .item:nth-of-type(12n+5),.div4 .item:nth-of-type(12n+9),.div5 .item:nth-of-type(15n+1),.div5 .item:nth-of-type(15n+5),.div5 .item:nth-of-type(15n+6),.div5 .item:nth-of-type(15n+10),.div5 .item:nth-of-type(15n+11),.div5 .item:nth-of-type(15n+15),.div6 .item:nth-of-type(12n+1),.div6 .item:nth-of-type(12n+7),.div7 .item:nth-of-type(7n+1),.div8 .item:nth-of-type(12n+1),.div8 .item:nth-of-type(12n+5),.div8 .item:nth-of-type(12n+9),.div9 .item:nth-of-type(9n+1)": {
      gridColumn: `auto / span 3`,
    },
  },
}

export const itemStyles = {
  minHeight: [`500px`, `700px`],
}
