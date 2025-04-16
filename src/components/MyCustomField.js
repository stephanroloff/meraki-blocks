import {PanelRow,Button} from '@wordpress/components';
import { useState } from '@wordpress/element';  

function MyCustomField(props) {
    // let { attributes, setAttributes } = props.properties
    const [editMode, setEditMode] = useState(false)

    let sidebar = document.querySelector('.editor-sidebar__panel-tabs');

    function buttonCliked() {
		if(editMode){
            sidebar.style.zIndex = 1;
			setEditMode(false);
		}else{
            sidebar.style.zIndex = 0;
			setEditMode(true);
		}
	}

    return (
        <>
            <PanelRow>
                <Button variant="primary" onClick={buttonCliked}>{editMode? 'Out of edit mode':'Edit block'}</Button>
                {editMode?
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}>
                        <div 
                        className='custom-fields-modal-window' 
                        style={{
                            top: 0,
                            left: 0,
                            minWidth: '800px',
                            minHeight: '200px',
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            padding: '1rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // <- Aquí está el box shadow
                            borderRadius: '8px', // opcional, se ve más limpio
                        }}
                        // style={{position: 'fixed', zIndex:10000, top: 0, left: 0, width: '200px', height: '200px'}}
                        >
                            <p>Suprise!</p>
                            <div style={{height:'100px'}}></div>
                            <Button variant="primary" onClick={buttonCliked}>{editMode? 'Close':'Open'}</Button>
                        </div>
                    </div>
                    :
                    ''
                }
            </PanelRow>
        </>
    );
}

export default MyCustomField;