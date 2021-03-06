import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';

export const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.theme) // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio options={themes} onChangeOption={onChangeCallback} value={theme}/>

            <hr/>
        </div>
    );
}

export default HW12;
