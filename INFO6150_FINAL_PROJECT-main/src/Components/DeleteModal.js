import React from 'react';

const DeleteModal = ({ tripName, onDelete, onCancel }) => {
    return (
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Delete Trip</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete the trip:</p>
                        <h4>{tripName}</h4>
                        <p>This action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCancel}>Cancel</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onDelete}>Confirm Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
