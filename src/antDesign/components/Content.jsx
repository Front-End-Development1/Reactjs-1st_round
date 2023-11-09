import React from 'react';
import { Card } from 'antd';
import {Col , Row} from 'antd'
const { Meta } = Card;


const Content = () => {
    return(
        <>
            <Row className=' m-4 p-4'
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
                <Col span={6} className="gutter-row">
                <div>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </div>
                </Col>
                <Col span={6} className="gutter-row">
                <div>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </div>
                </Col>
                <Col span={6} className="gutter-row">
                <div>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </div>
                </Col>
                <Col span={6} className="gutter-row">
                <div>
                <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
                </div>
                </Col>
            </Row >

            <Row className='m-4 p-4'>
        <Col span={6} className="gutter-row">
        <div>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </div>
        </Col>
        <Col span={6} className="gutter-row">
        <div>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </div>
        </Col>
        <Col span={6} className="gutter-row">
        <div>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </div>
        </Col>
        <Col span={6} className="gutter-row">
        <div>
        <Card
        hoverable
        style={{width: 240,}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </div>
        </Col>
        </Row>

        </>
    )
}

export default Content;