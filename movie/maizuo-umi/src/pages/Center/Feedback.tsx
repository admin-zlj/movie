import { NavBar, TextArea, Toast } from 'antd-mobile';
import { useState } from 'react';
import { history } from 'umi';
//@ts-ignore
import { submitFeedBack } from '../../api/index.js';

export default () => {
    const [textValue, setTextValue] = useState('');
    const submit = async () => {
        if (!!textValue) {
            console.log('textValue', textValue);
            await submitFeedBack({content:encodeURIComponent(textValue)});
            Toast.show({
                icon: 'loading',
                content: '提交中…',
                maskClickable: false,
                duration: 1000,
                afterClose: () => {
                    Toast.show({
                        icon: 'success',
                        content: '提交成功',
                        maskClickable: false,
                        duration: 1000,
                        afterClose: () => {
							history.push(`/center/setting`);
                        },
                    });
                },
            });
        } else {
            Toast.show({
                content: '请输入您的意见',
            });
        }
    };
    return (
        <div style={{ height: '100vh', backgroundColor: '#F4F4F4' }}>
            <div style={{ backgroundColor: '#fff' }}>
                <NavBar
                    onBack={() => {
						history.push(`/center/setting`);
                    }}
                    right={
                        <div style={{ fontSize: 16 }} onClick={submit}>
                            提交
                        </div>
                    }
                >
                    意见反馈
                </NavBar>
            </div>
            <div
                style={{ backgroundColor: 'white', padding: 20, marginTop: 15 }}
            >
                <TextArea
                    value={textValue}
                    onChange={(v) => setTextValue(v)}
                    placeholder="请留下您的宝贵的意见"
                    autoSize={true}
                    showCount
                    maxLength={500}
                />
            </div>
        </div>
    );
};
