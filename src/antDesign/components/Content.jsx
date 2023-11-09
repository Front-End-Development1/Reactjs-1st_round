import React from 'react';
import { Card } from 'antd';
import {Col , Row} from 'antd'
const { Meta } = Card;


const Content = () => {
    return(
        <>
            <Row className=' m-4 p-4'>
                <Col span={6}>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </Col>
                <Col span={6}>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </Col>
                <Col span={6}>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </Col>
                <Col span={6}>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </Col>
            </Row >

            <Row className='m-4 p-4'>
        <Col span={6}>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </Col>
        <Col span={6}>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </Col>
        <Col span={6}>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </Col>
        <Col span={6}>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </Col>
        </Row>

        </>
    )
}

export default Content;