import React from 'react';
import '../../App.css'
import img1 from '../../assets/ShearConnection/sc_fin_plate.png'
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Select,Input} from 'antd'

import CFBW from '../../assets/ShearConnection/sc_fin_plate/fin_cf_bw.png'
import CWBW from '../../assets/ShearConnection/sc_fin_plate/fin_cw_bw.png'
import BB from '../../assets/ShearConnection/sc_fin_plate/fin_beam_beam.png'
import NotSelected from '../../assets/notSelected.png'

const { Option } = Select;

function FinePlate() {

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedBeam, setSelectedBeam] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedBeamSection, setSelectedBeamSection] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPropertyClass, setSelectedPropertyClass] = useState('');
  const [selectedThickness, setSelectedThickness] = useState('');


  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  let imageSource = '';
  if (selectedOption === 'Column_Flange_Beam_Web') {
    imageSource = CFBW;
  } else if (selectedOption === 'Column_web_Beam_Web') {
    imageSource = CWBW;
  } else if (selectedOption === 'Beam_Beam') {
    imageSource = BB;
  }else if (selectedOption === '') {
    imageSource = NotSelected;
  }

  const logData = [
    {
      "logID": 401,
      "log": "This is log entry 1."
    },
    {
      "logID": 202,
      "log": "This is log entry 2."
    },
    {
      "logID": 301,
      "log": "This is log entry 3."
    },
    {
      "logID": 404,
      "log": "This is log entry 4."
    },
    {
      "logID": 504,
      "log": "This is log entry 5."
    }
  ];

  const column = [
    {
      "columnID": 81,
      "col_name": "HB+197"
    },
    {
      "columnID": 92,
      "col_name": "HB+561"
    },
    {
      "columnID": 73,
      "col_name": "HB+804"
    },
    {
      "columnID": 49,
      "col_name": "HB+921"
    },
    {
      "columnID": 27,
      "col_name": "HB+156"
    },
    {
      "columnID": 35,
      "col_name": "HB+488"
    },
    {
      "columnID": 62,
      "col_name": "HB+279"
    }
  ];

  const beamData = [
    {
      "beamID": 58,
      "beam_name": "JB487"
    },
    {
      "beamID": 91,
      "beam_name": "JB104"
    },
    {
      "beamID": 27,
      "beam_name": "JB827"
    },
    {
      "beamID": 72,
      "beam_name": "JB655"
    },
    {
      "beamID": 39,
      "beam_name": "JB291"
    },
    {
      "beamID": 15,
      "beam_name": "JB737"
    },
    {
      "beamID": 64,
      "beam_name": "JB923"
    }
  ];
  
  const material = [
    {"MaterialID": "Fe 290",
      "Material_data": "Fe 290"
    },
    {"MaterialID": "Fe 410 W",
      "Material_data": "Fe 410 W"
    },
    {"MaterialID": "Fe 410 W",
      "Material_data": "Fe 410 W"
    },
    {"MaterialID": "Fe 410 W",
      "Material_data": "Fe 410 W"
    },
    {"MaterialID": "Fe 440",
      "Material_data": "Fe 440"
    }
  ];

  const Connectivity = [
    {
      "connID": "Column_Flange_Beam_Web",
      "Data": "Column Flange-Beam Web"
    },
    {
      "connID": "Column_web_Beam_Web",
      "Data": "Column web-Beam Web"
    },
    {
      "connID": "Beam_Beam",
      "Data": "Beam-Beam"
    }
  ];

  const MenuItems = [
    {
      label: "File",
    },
    {
      label: "Edit",
    },
    {
      label: "Graphics",
    },
    {
      label: "Database",
    },
    {
      label: "Help",
    },
  ];
  
  const data = {
    "mainTitle": "Output Dock",
    "sections": [
      {
        "title": "Bolt",
        "components": [
          { "label": "Diameter (mm)", "inputType": "text" },
          { "label": "Property Class", "inputType": "text" },
          { "label": "Shear Capacity (kN)", "inputType": "text" },
          { "label": "Capacity (kN)", "inputType": "text" },
          { "label": "Bolt Force (kN)", "inputType": "text" },
          { "label": "Bolt Columns (nos)", "inputType": "text" },
          { "label": "Bolt Rows (nos)", "inputType": "text" },
          { "label": "Spacing", "inputType": "button" }
        ]
      },
      {
        "title": "Plate",
        "components": [
          { "label": "Thickness (mm)", "inputType": "text" },
          { "label": "Height (mm)", "inputType": "text" },
          { "label": "Length (mm)", "inputType": "text" },
          { "label": "Capacity", "inputType": "button" }
        ]
      },
      {
        "title": "Section Details",
        "components": [
          { "label": "Capacity", "inputType": "button" }
        ]
      },
      {
        "title": "Weld",
        "components": [
          { "label": "Size (mm)", "inputType": "text" },
          { "label": "Strength (N/mm2)", "inputType": "text" },
          { "label": "Stress (N/mm)", "inputType": "text" }
        ]
      }
    ]
  };

  const inputdock = {
    "Connecting Members": {
      "Connectivity": {
        type: "select",
        options: Connectivity.map((item) => ({
          value: item.connID,
          label: item.Data
        })),
        selected: selectedOption
      },
      "Column Section": {
        type: "select",
        options: column.map((item) => ({
          value: item.columnID,
          label: item.col_name
        })),
        selected: selectedColumn
      },
      "Beam Section": {
        type: "select",
        options: beamData.map((item) => ({
          value: item.beamID,
          label: item.beam_name
        })),
        selected: selectedBeam
      },
      "Material": {
        type: "select",
        options: material.map((item) => ({
          value: item.MaterialID,
          label: item.Material_data
        })),
        selected: selectedMaterial
      }
    },
    "Factored Loads": {
      "Shear Force (kN)": {
        type: "text",
        value: ""
      },
      "Axial Force (kN)": {
        type: "text",
        value: ""
      }
    },
    "Bolt": {
      "Beam Section": {
        type: "select",
        options: [
          { value: "Customized", label: "Customized" },
          { value: "All", label: "All" }
        ],
        selected: selectedBeamSection
      },
      "Type": {
        type: "select",
        options: [
          { value: "Bearing_Bolt", label: "Bearing Bolt" },
          { value: "Fraction_Grip_Bolt", label: "Fraction Grip Bolt" }
        ],
        selected: selectedType
      },
      "Property Class": {
        type: "select",
        options: [
          { value: "Customized", label: "Customized" },
          { value: "All", label: "All" }
        ],
        selected: selectedPropertyClass
      }
    },
    "Plate": {
      "Thickness (mm)": {
        type: "select",
        options: [
          { value: "Customized", label: "Customized" },
          { value: "All", label: "All" }
        ],
        selected: selectedThickness
      }
    }
  };

  return (

    <>
    <div>
      <div className='module_nav'>

      {MenuItems.map((item, index) => (
        <div key={index}>{item.label}</div>
      ))}
      </div>
    
    {/* Main Body of code  */}
    <div className='superMainBody'>
      {/* Left */}
      <div>
  <h5>Input Dock</h5>
  <div className='subMainBody scroll-data'>
    {/* Section 1 Start */}
    <h3>Connecting Members</h3>
    <div className='component-grid'>
      {Object.entries(inputdock["Connecting Members"]).map(([label, component]) => (
        <React.Fragment key={label}>
          <div><h4>{label}</h4></div>
          {component.type === "select" ? (<>
            <div>
              <Select
                style={{ width: '100%' }}
                onChange={(value) => {
                  if (label === "Connectivity") setSelectedOption(value) && handleSelectChange();
                  else if (label === "Column Section") setSelectedColumn(value);
                  else if (label === "Beam Section") setSelectedBeam(value);
                  else if (label === "Material") setSelectedMaterial(value);
                }}
                value={
                  label === "Connectivity"
                    ? selectedOption
                    : label === "Column_Section"
                    ? selectedColumn
                    : label === "Beam_Section"
                    ? selectedBeam
                    : label === "Material"
                    ? selectedMaterial
                    : null
                }
              >
                {component.options.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              
            </div>
            {label === "Connectivity" ? (
            <>
            <div></div>
            <div><img src={imageSource} height='100px' width='100px' alt="" /></div>
            </>) : <></>}
            
            </>
          ) : (
            <div>
              <Input
                type="text"
                name={`${label.replace(/[^a-zA-Z0-9]/g, "_")}`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
      {/* ... */}
    </div>
    {/* Section End */}
    {/* Section Start  */}
    <h3>Factored Loads</h3>
    <div className='component-grid'>
      {Object.entries(inputdock["Factored Loads"]).map(([label, component]) => (
        <React.Fragment key={label}>
          <div><h4>{label} :</h4></div>
          {component.type === "select" ? (
            <div>
              <Select
                style={{ width: '100%' }}
                onChange={(value) => {
                  if (label === "Shear Force (kN)") setSelectedOption(value);
                  else if (label === "Axial Force (kN)") setSelectedColumn(value);
                }}
                value={
                  label === "Shear Force (kN)"
                    ? selectedOption
                    : label === "Axial Force (kN)"
                    ? selectedColumn
                    : null
                }
              >
                {component.options.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          ) : (
            <div>
              <Input
                type="text"
                name={`${label.replace(/[^a-zA-Z0-9]/g, "_")}`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
      {/* ... */}
    </div>
    {/* Section End */}
    {/* Section Start */}
    <h3>Bolt</h3>
    <div className='component-grid'>
      {Object.entries(inputdock["Bolt"]).map(([label, component]) => (
        <React.Fragment key={label}>
          <div><h4>{label}:</h4></div>
          {component.type === "select" ? (
            <div>
              <Select
                style={{ width: '100%' }}
                onChange={(value) => {
                  if (label === "Beam Section") setSelectedBeamSection(value);
                  else if (label === "Type") setSelectedType(value);
                  else if (label === "Property Class") setSelectedPropertyClass(value);
                }}
                value={
                  label === "Beam Section"
                    ? selectedBeamSection
                    : label === "Type"
                    ? selectedType
                    : label === "Property Class"
                    ? selectedPropertyClass
                    : null
                }
              >
                {component.options.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          ) : (
            <div>
              <Input
                type="text"
                name={`${label.replace(/[^a-zA-Z0-9]/g, "_")}`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
      {/* ... */}
    </div>
    {/* Section End */}
    <h3>Plate</h3>
    <div className='component-grid'>
      {Object.entries(inputdock["Plate"]).map(([label, component]) => (
        <React.Fragment key={label}>
          <div><h4>{label}</h4></div>
          {component.type === "select" ? (
            <div>
              <Select
                style={{ width: '100%' }}
                onChange={(value) => {
                  if (label === "Thickness (mm)") setSelectedThickness(value);
                }}
                value={label === "Thickness (mm)" ? selectedThickness : null}
              >
                {component.options.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          ) : (
            <div>
              <Input
                type="text"
                name={`${label.replace(/[^a-zA-Z0-9]/g, "_")}`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
  <div className='inputdock-btn'>
            <Input type="button" value="Reset" />
            <Input type="button" value="Design" />
          </div>
</div>              
      {/* Middle */}
      <div className='superMainBody_mid'>
        <img src={img1} alt="Demo" height='300px' width='300px' /> 
        <br/>
        <div>
        <ul>
            <select name="Cars" size="5" >  
                  {logData.map((item) => (
                    <option key={item.logID} value={item.logID}> LOG ID : {item.logID}{" :  _"}
                      LOG_Name: {item.log}  </option>   
                  ))}
            </select>
        </ul>
        </div>
      </div>

      {/* Right */}
      <div>
      <h5>{data.mainTitle}</h5>
      <div className='subMainBody scroll-data'>
        {data.sections.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            <div className='component-grid'>
              {section.components.map((component) => (
              <>
                <div key={component.label}>
                  <h4>{component.label}</h4> </div>
                  <div>
                  {component.inputType === "button" ? (
                    <Input
                      type={component.inputType}
                      name={`${section.title.replace(/[^a-zA-Z0-9]/g, "_")}_${component.label.replace(/[^a-zA-Z0-9]/g, "_")}`}
                      value={component.label}
                    />
                  ) : (
                    <Input
                      type={component.inputType}
                      name={`${section.title.replace(/[^a-zA-Z0-9]/g, "_")}_${component.label.replace(/[^a-zA-Z0-9]/g, "_")}`}
                    />
                  )}
                </div>
              </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='outputdock-btn'>
            <Input type="button" value="Create Design Report" />
            <Input type="button" value="Save Output" />
          </div>
    </div>
    </div>

    {/* <ToastContainer /> */}
    </div>
    </>
  )
}

export default FinePlate

// Old Code 
// <div>
// <h5>Output Dock</h5>
// <div className='subMainBody scroll-data'> 
// {/* Section 1 Start */}
//   <h3>Bolt</h3>       
//   <div className='component-grid'> 
//       <div><h4>Diameter (mm)</h4></div>
//       <div><Input type="text" name="bolt_Diameter"/></div>
//       <div><h4>Property Class</h4></div>
//       <div><Input type="text" name="bolt_Property_Class"/></div>
//       <div><h4>Shear Capacity (kN)</h4></div>
//       <div><Input type="text" name="bolt_Shear_Capacity"/></div>
//       <div><h4>Capacity (kN)</h4></div>
//       <div><Input type="text" name="bolt_Capacity"/></div>
//       <div><h4>Bolt Force (kN)</h4></div>
//       <div><Input type="text" name="bolt_Bolt_Force"/></div>
//       <div><h4>Bolt Columns (nos)</h4></div>
//       <div><Input type="text" name="boly_Bolt_Columns"/></div>
//       <div><h4>Bolt Rows (nos)</h4></div>
//       <div><Input type="text" name="bolt_Bolt_Rows"/></div>
//       <div><h4>Spacing</h4></div>
//       <div><Input type="button" name="bolt_Spacing"  value="Spacing Details"/></div>
//   </div>
//   {/* Section End */}
//   {/* Section 2 Start */}
//   <h3>Plate</h3>       
//   <div className='component-grid    '> 
//       <div><h4>Thickness (mm)</h4></div>
//       <div><Input type="text" name="plate_Thickness"/></div>
//       <div><h4>Hight (mm)</h4></div>
//       <div><Input type="text" name="plate_Hight"/></div>
//       <div><h4>Length (mm)</h4></div>
//       <div><Input type="text" name="plate_Length"/></div>
//       <div><h4>Capacity</h4></div>
//       <div><Input type="button" name="plate_Capacity" value="Spacing Details"/></div>
//   </div>
//   {/* Section End */}
//   {/* Section 3 Start */}
//   <h3>Section Details</h3>       
//   <div className='component-grid    '> 
//       <div><h4>Capacity</h4></div>
//       <div><Input type="button" name="plate_Capacity" value="Spacing Details"/></div>
//   </div>
//   {/* Section End */}
//   {/* Section 4 Start */}
//   <h3>Weld</h3>       
//   <div className='component-grid    '> 
//       <div><h4>Size (mm)</h4></div>
//       <div><Input type="text" name="fileName"/></div>
//       <div><h4>Strength (N/mm2)</h4></div>
//       <div><Input type="text" name="fileName"/></div>
//       <div><h4>Stress (N/mm)</h4></div>
//       <div><Input type="text" name="fileName"/></div>
//   </div>
//   {/* Section End */}
// </div>
//   <div className='outputdock-btn'>
//     <Input type="button" value="Create Design Report" />
//     <Input type="button" value="Save Output" />
//   </div>
// </div>
