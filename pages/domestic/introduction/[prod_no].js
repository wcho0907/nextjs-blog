import Image from 'next/image'
import { JsonViewer, createDataType  } from '@textea/json-viewer'

const Albums = ({ prod_no, allAlbums }) => {
    return (
        <div>
            <h1>{ prod_no }</h1>
            {/* {allAlbums.map((album, idx) => (
                <div key={idx}>{album}</div>))
            } */}
            <JsonViewer value={allAlbums}
                valueTypes={[
                    {
                      is: (value) => typeof value === 'string' && value.startsWith('https://image.cdn-'),
                      Component: (props) => <Image height={50} width={50} src={props.value} alt={props.value}/>,
                    },
                    // or
                    createDataType(
                      (value) => typeof value === 'string' && value.startsWith('https://image.cdn-'),
                      (props) => <Image height={50} width={50} src={props.value} alt={props.value}/>,
                    )
                  ]}
            />
        </div>
        
    )
}
export default Albums;

export async function getServerSideProps(context) {
    // Fetching data from jsonplaceholder.

    const { params } = context;

    const res = await fetch(
        'http://pkgtw-t01.eztravel.com.tw:8088/pkgtw/rest/v1.2/intro/info/ez/'+ params.prod_no);
        //'https://jsonplaceholder.typicode.com/albums');
    let allAlbums = await res.json();
  
    // Sending fetched data to the page component via props.
    return {
        props: {
            prod_no: params.prod_no, 
            allAlbums: allAlbums
        }
    }
}