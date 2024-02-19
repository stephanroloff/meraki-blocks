import {
	PanelRow,
    __experimentalNumberControl as NumberControl
} from '@wordpress/components';


function MyNumberControl(props) {
    let { attributes, setAttributes } = props.properties
    let { name, attrName, min, max } = props

    return (
        <>
        <PanelRow>
            <NumberControl
                label={name}
                min={min? min : 0}
                max={max? max : Infinity}
                onChange={value => setAttributes({ [attrName]: value })}
                value={ attributes[attrName] }
                // isShiftStepEnabled={ true }
                // shiftStep={ 1 }
            />		
        </PanelRow>
        </>
    );
}

export default MyNumberControl;