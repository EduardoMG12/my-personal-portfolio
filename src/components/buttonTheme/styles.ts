import styled from 'styled-components';

export const Button = styled.input`
  display: block;
  margin-bottom: 1.5em;
  font-size: 1em;
  background-color: rgba(0,0,0,0.7);
  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.3) inset;
  color: #fdea7b;
  display: inline-flex;
  align-items: center;
  padding: 0.15em;
  margin: auto 0;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @keyframes light{
        0%{opacity:1;color: #fdea7b;}
        1%{opacity:0.95;color: #f5edbf}
        10%{opacity:0.95;color:#f5edbf;}
        11%{opacity:1;color: #fdea7b;}
        12%{opacity:0.95;color:#f5edbf;}
        20%{opacity:0.95;color:#f5edbf;}
        21%{opacity:1;color: #fdea7b;}
        26%{opacity:0.95;color:#f5edbf;}
        30%{opacity:0.95;color:#f5edbf;}
        31%{opacity:1;color: #fdea7b;}
        35%{opacity:1;color: #fdea7b;}
        36%{opacity:0.95;color:#f5edbf;}
        45%{opacity:0.95;color:#f5edbf;}
        46%{opacity:1;color: #fdea7b;}
        50%{opacity:1;color: #fdea7b;}
        55%{opacity:1;color: #fdea7b;}
        56%{opacity:0.95;color:#f5edbf;}
        57%{opacity:0.95;color:#f5edbf;}
        58%{opacity:1;color: #fdea7b;}
        60%{opacity:1;color: #fdea7b;}
        61%{opacity:0.95;color:#f5edbf;}
        65%{opacity:0.95;color:#f5edbf;}
        66%{opacity:1;color: #fdea7b;}
        75%{opacity:1;color: #fdea7b;}
        76%{opacity:0.95;color:#f5edbf;}
        77%{opacity:0.95;color:#f5edbf;}
        78%{opacity:1;color: #fdea7b;}
        85%{opacity:1;color: #fdea7b;}
        86%{opacity:0.95;color:#f5edbf;}
        87%{opacity:0.95;color:#f5edbf;}
        88%{opacity:1;color: #fdea7b;}
        99%{opacity:1;color: #fdea7b;}
    }

&:before, &:after {
  content: "";
  display: block;
}

&:before {
  background-color: #d7d7d7;
  border-radius: 50%;
  width: 1.2em;
  height: 1.2em;
  transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  z-index: 1;
}

&:after {
  background: linear-gradient(transparent 50%, rgba(0,0,0,0.15) 0) 0 50% / 50% 100%,
		repeating-linear-gradient(90deg,#bbb 0,#bbb,#bbb 20%,#999 20%,#999 40%) 0 50% / 50% 100%,
		radial-gradient(circle at 50% 50%,#888 25%, transparent 26%);
  background-repeat: no-repeat;
  border: 0.25em solid transparent;
  border-left: 0.4em solid #d8d8d8;
  border-right: 0 solid transparent;
  transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  transform: translateX(-22.5%);
  transform-origin: 25% 50%;
  width: 1.2em;
  height: 1em;
  box-sizing: border-box;
}
/* Checked */
&:checked {
  background-color: rgba(0,0,0,0.45);
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.1) inset;
}

&:checked:before {
  background-color: currentColor;
  transform: translateX(125%)
}

&:checked:after {
  border-left-color: currentColor;
  transform: translateX(-2.5%) rotateY(180deg);
}
/* Other States */
&:hover {
    /* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
    outline: 0;
    animation: light 5s ease-out 0.3s both;
}
`;
