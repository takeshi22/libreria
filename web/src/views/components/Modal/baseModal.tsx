import * as React from "react";

export const Modal = (props: any, {}) => {

  return (
    <div className="modal-content">
      <div className="modal-inner">
        {props.children}
      </div>
    </div>
  );
};

export const ModalHeader = (props: any, {}) => {
  return (
    <div className={`modal-header ${props.className}`}>
      {props.children}
    </div>
  );
};

export const ModalBody = (props: any, {}) => {
  return (
    <div className="modal-body">
      {props.children}
    </div>
  );
};

export const ModalFooter = (props: any, {}) => {
  return (
    <div className="modal-footer">
      {props.children}
    </div>
  );
};
