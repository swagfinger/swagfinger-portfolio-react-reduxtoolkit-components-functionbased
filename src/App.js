import React, { useState } from 'react';
//theme
import './App.css';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

import { ThemeProvider } from 'styled-components';
import { Heading4 } from './components/Typography/Typography';
import {
  ButtonVariationExample,
  ButtonModifiersExample,
} from './components/Button/ButtonExample';
import { ButtonWithIconExample } from './components/Button/ButtonWithIconExample';
import { SnackbarExample } from './components/Snackbar/SnackbarExample';
import {
  InputExample,
  InputReadOnlyExample,
  InputNoBorderExample,
} from './components/Input/InputExample';
import { InputPasswordExample } from './components/Input/InputPasswordExample';
import {
  InputWithIconRightExample,
  InputWithIconLeftExample,
} from './components/Input/InputWithIconExample';
import { InputSearchExample } from './components/Input/InputSearchExample';
import { RadioButtonExample } from './components/RadioButton/RadioButtonExample';
import { RadioButtonGroupExample } from './components/RadioButton/RadioButtonGroupExample';
import { CheckboxExample } from './components/Checkbox/CheckboxExample';
import { CheckboxGroupExample } from './components/Checkbox/CheckboxGroupExample';
import { CounterExample } from './components/Counter/CounterExample';
import { AccordionExample } from './components/Accordion/AccordionExample';
import { SelectExample } from './components/Select/SelectExample';
import { Block } from './components/Layout/Block';
import { ToggleSwitchExample } from './components/Switch/ToggleSwitchExample';
import { CheckboxIconExample } from './components/Checkbox/CheckboxIconExample';
import { TypographyExample } from './components/Typography/TypographyExample';
import { ListExample } from './components/List/ListExample';
import { CardExample } from './components/Card/CardExample';
import { TableExample } from './components/Table/TableExample';

const App = () => {
  const [useDarkTheme] = useState(false);
  const [theme] = useState(useDarkTheme ? darkTheme : defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <div
        className='flex-auto flex-col p-3'
        style={{
          background: useDarkTheme
            ? darkTheme.backgroundColor
            : defaultTheme.backgroundColor,
          color: useDarkTheme ? darkTheme.color : defaultTheme.color,
          height: '100vh',
        }}
      >
        {/* <button
          style={{
            margin: '0 16px 24px',
            padding: '8px',
            color: useDarkTheme
              ? darkTheme.default.colorInverted
              : defaultTheme.default.color,
            backgroundColor: useDarkTheme
              ? darkTheme.default.backgroundColorInverted
              : defaultTheme.default.backgroundColor,
            cursor: 'pointer'
          }}
          onClick={() => {
            console.log('set to dark theme');
            setUseDarkTheme(true);
          }}
        >
          Dark theme
        </button>

        <button
          style={{
            margin: '0 16px 24px',
            padding: '8px',
            color: useDarkTheme
              ? darkTheme.default.colorInverted
              : defaultTheme.default.color,
            backgroundColor: useDarkTheme
              ? darkTheme.default.backgroundColorInverted
              : defaultTheme.default.backgroundColor,
            cursor: 'pointer'
          }}
          onClick={() => {
            console.log('set to default theme');
            setUseDarkTheme(false);
          }}
        >
          Default theme
        </button> */}

        {/* <h1 class="font-bold">SWAGFINGER UI</h1> */}
        <Block>
          <Heading4>01. Typography</Heading4>
          <TypographyExample />
        </Block>

        <Block>
          <Heading4>02. Buttons</Heading4>
          <div className='flex flex-col'>
            <ButtonVariationExample />
            <ButtonModifiersExample />
            <ButtonWithIconExample />
          </div>
        </Block>

        <Block>
          <Heading4>03. Snackbar</Heading4>
          <div className='flex flex-col'>
            <SnackbarExample />
          </div>
        </Block>

        <Block>
          <Heading4>04. Input</Heading4>
          <div className='flex flex-col'>
            <InputExample />
            <InputReadOnlyExample />
            <InputNoBorderExample />
            <InputPasswordExample />
            <InputWithIconRightExample />
            <InputWithIconLeftExample />
            <InputSearchExample />
          </div>
        </Block>
        <Block>
          <Heading4>05. Multi-input</Heading4>
          <div className='flex flex-col'></div>
        </Block>
        <Block>
          <Heading4>06. Multi-input Objects</Heading4>
          <div className='flex flex-col'></div>
        </Block>
        <Block>
          <Heading4>07. Select</Heading4>
          <SelectExample />
        </Block>

        <Block>
          <Heading4>08. Multi-select</Heading4>
        </Block>
        <Block>
          <Heading4>09. Multi-select with input</Heading4>
        </Block>
        <Block>
          <Heading4>10. Radio Button</Heading4>
          <div className='flex flex-col'>
            <RadioButtonExample />
            <RadioButtonGroupExample />
          </div>
        </Block>

        <Block>
          <Heading4>11. Checkbox</Heading4>
          <div className='flex flex-col'>
            <CheckboxExample />
            <CheckboxGroupExample />
            <CheckboxIconExample />
          </div>
        </Block>

        <Block>
          <Heading4>12. Counter</Heading4>
          <CounterExample />
        </Block>

        <Block>
          <Heading4>13. ToggleSwitch </Heading4>
          <ToggleSwitchExample />
        </Block>

        <Block>
          <Heading4>14. Slider</Heading4>
        </Block>

        <Block>
          <Heading4>15. Multi-range slider</Heading4>
        </Block>

        <Block>
          <Heading4>16. Accordion</Heading4>
          <AccordionExample />
        </Block>

        <Block>
          <Heading4>17. List</Heading4>
          <ListExample />
        </Block>

        <Block>
          <Heading4>18. Card</Heading4>
          <CardExample />
        </Block>

        <Block>
          <Heading4>19. Layout</Heading4>
          <div className='flex items-start flex-col'>
            <a
              href='https://swagfinger-component-scss-flexbox-grid.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              sass flexbox-grid -
              https://swagfinger-component-scss-flexbox-grid.vercel.app/
            </a>
            <a
              href='https://github.com/swagfinger/swagfinger-component-scss-flexbox-grid'
              target='_blank'
              rel='noreferrer'
            >
              github -
              https://github.com/swagfinger/swagfinger-component-scss-flexbox-grid
            </a>
          </div>
        </Block>

        <Block>
          <Heading4>20. Table</Heading4>
          <TableExample />
        </Block>
        <Block>
          <Heading4>21. Navbar</Heading4>
        </Block>
        <Block>
          <Heading4>22. Link</Heading4>
        </Block>
        <Block>
          <Heading4>23. Breadcrumbs</Heading4>
        </Block>
        <Block>
          <Heading4>24. Dialog (aka Modal)</Heading4>
        </Block>
        <Block>
          <Heading4>25. Progress</Heading4>
        </Block>
        <Block>
          <Heading4>26. Loading Button</Heading4>
        </Block>
        <Block>
          <Heading4>27. Timeline</Heading4>
        </Block>
        <Block>
          <Heading4>28. Upload</Heading4>
        </Block>
        <Block>
          <Heading4>29. DatePicker, TimePicker, DateTimePicker</Heading4>
        </Block>
        <Block>
          <Heading4>30. DateRangePicker</Heading4>
        </Block>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
