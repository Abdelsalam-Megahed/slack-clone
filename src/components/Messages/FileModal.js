import React from 'react';
import {Modal, Input, Button,Icon} from 'semantic-ui-react';

class FileModal extends React.Component {
    state = {  }
    render() { 
        const {modal, closeModal} = this.props;

        return ( 
            <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>select an image File.</Modal.Header>
                <Modal.Content>
                    <Input 
                     fluid
                     label="File types: jpg, png"
                     name="file"
                     type="file"
                     />
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                    color="green"
                    inverted
                    >
                    <Icon name="checkmark" />
                        Send
                    </Button>

                    <Button
                    onClick={closeModal} 
                    color="red"
                    inverted>
                    <Icon name="remove" />
                        Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
         );
    }
}
 
export default FileModal;