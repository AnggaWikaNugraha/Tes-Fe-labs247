import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabOne from '../TabOne';
import TabTwo from '../TabTwo';
import TabThree from '../TabThree';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function CompApptabs() {
  const [value, setValue] = React.useState(0);
  const [Nomer, setNomer] = React.useState('');
  const [arr, setarr] = React.useState([]);
  const [arrpos, setarrpos] = React.useState([]);
  console.log(arrpos)
  let isArray= [];
  let isArrayPositif = []

  const CekArrayPositig = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        isArrayPositif.push(arr[i])
      }
    }
    setarrpos(isArrayPositif)
  }

  function generateRandom(min = -1000, max = 1000) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

  const ActArray = () => {
    if (isArray.length > 0) {
      isArray = []
      for (let i = 0; i < Number(Nomer); i++) {
        isArray.push(generateRandom());
      }
    } else {
      for (let i = 0; i < Number(Nomer); i++) {
        isArray.push(generateRandom());
      }
    }
    setarr(isArray);
  }

  // console.log(Nomer)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '84.5vh' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab disabled={Nomer} label="Tab One" {...a11yProps(0)} />
        <Tab label="Tab Two" {...a11yProps(1)} />
        <Tab label="Tab Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabOne setValue={setValue} setNomer={setNomer} Nomer={Nomer}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabTwo isArray={arr} ActArray={ActArray}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabThree setarrpos={setarrpos} ActArray={CekArrayPositig} isArray={arrpos}/>
      </TabPanel>
    </Box>
  );
}