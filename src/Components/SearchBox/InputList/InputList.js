import React from 'react';
import useStyles from './styles';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

const InputList = ({label, placeholder, list}) => {

    const styles = useStyles()
    function createMunuItem(){if(list) return list.map(l=><StyledOption key={l} value={l}>{l}</StyledOption>)}

    const StyledOption = styled(OptionUnstyled)`
        list-style: none;
        margin: 10px 0;
        padding: 10px 10px;
        border-radius: 10px;
        cursor: pointer;

        &.${optionUnstyledClasses.disabled} {
            color: #888;
        }

        &.${optionUnstyledClasses.selected} {
            background-color: gray;
        }

        &.${optionUnstyledClasses.highlighted} {
            background-color: #d7d7d76e;
        }

        &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
            background-color: #d7d7d76e;
        }

        &:hover:not(.${optionUnstyledClasses.disabled}) {
            background-color: #d7d7d76e;
        }
    `;
    const StyledPopper = styled(PopperUnstyled)`
        z-index: 1;
        box-shadow: 0 0 5px #67767C;
        border-radius: 20px;
        padding: 5px;
        background-color: white;
        transform: translate(0px, 105px) !important;
    `;
    const StyledListbox = styled('ul')`
        font-family: GilroySemiBold;
        font-size: 19px;
        padding: 0;
        margin: 0;
        background-color: #fff;
        min-width: 200px;
        color: #000;
        border-radius: 20px,
        box-shadow: 5px 1px 5px gray;
        margin: 5px;
    `;
    const StyledButton = styled('button')`
        font-family: Gilroy;
        font-size: 0.875rem;
        min-height: calc(1.5em + 22px);
        min-width: 200px;
        background: transparent;
        text-align: left;
        line-height: 1.5;
        color: #000;
        border: none;

        &.${selectUnstyledClasses.focusVisible} {
            border-bottom: 2px solid #67767C;
        }
    `;

    function CustomSelect(props) {
        const components = {
            Root: StyledButton,
            Listbox: StyledListbox,
            Popper: StyledPopper,
            ...props.components,
        };
        return <SelectUnstyled {...props} components={components} />;
    }

    function renderValue(option) {
        if (option == null) {
          return <span className={styles.placeholder}>{placeholder}</span>;
        }
        return (
          <span className={styles.listItem}>
            {option.value}
          </span>
        );
    }

    return (
        <div className={styles.InputsFormRoot} key={label} >
            <label className={styles.inputlabel}>{label}</label>
            <CustomSelect renderValue={renderValue}>
                {createMunuItem()}
            </CustomSelect>
        </div>
    )
}

export default InputList