import {PanelRow,__experimentalUnitControl as UnitControl} from '@wordpress/components';

function MyUnitControl(props) {
    let { attributes, setAttributes } = props.properties
    let { name, attrName } = props

    return (
        <PanelRow>
            <UnitControl
                onChange={ (value) => {setAttributes({ [attrName]: value })}}
                label={name}
                isUnitSelectTabbable
                value={ attributes[attrName] } 
            />
        </PanelRow>
    );
}

export default MyUnitControl;