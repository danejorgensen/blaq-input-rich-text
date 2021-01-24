import React from 'react';
import VariableSelect from './VariableSelect';

const handleInsert = (props) => {
  console.log('handleInsert: ', props);
}

const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
        <option value="1" />
        <option value="2" />
        <option selected />
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <select className="ql-color">
        <option value="red" />
        <option value="green" />
        <option value="blue" />
        <option value="orange" />
        <option value="violet" />
        <option value="#d0d1d2" />
        <option selected />
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
    </span>
    <span className="ql-formats">
      <button className="ql-clean" />
      <button className="ql-image" />
    </span>
    <span className="ql-formats">
      <VariableSelect onVariableInsert={handleInsert} resource="representment/variables" />
    </span>
  </div>
);

export default QuillToolbar;
