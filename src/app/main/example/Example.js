import React from 'react';
import {FusePageSimple, DemoContent} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles(theme => ({
    layoutRoot: {}
}));

function ExamplePage(props)
{
    const classes = useStyles(props);
    const {t} = useTranslation('examplePage');

    return (
        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="p-24"><h4>{t('TITLE')}</h4></div>
            }
            contentToolbar={
                <div className="px-24"><h4>Content Toolbar</h4></div>
            }
            content={
                <div className="p-24">
                    <h4>Content</h4>
                    <br/>
                    <DemoContent/>
                </div>
            }
        />
    )
}

export default ExamplePage;
