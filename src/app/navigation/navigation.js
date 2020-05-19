import React from 'react';

export class Navigation {

  _modal = {}

  static toggleModal = (name, params) => {
    this._modal[name].current.toggleModal(params)
  }

  static addModal(name) {
    this._modal = {
      ...this._modal,
      [name]: React.createRef()
    }
    return this._modal[name];
  }

}