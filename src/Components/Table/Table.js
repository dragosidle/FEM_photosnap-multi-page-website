import './Table.css'

// assets
import sprite from '../sprite.svg'

const Table = () => {
  return (
    <table id='features'>
      <tr>
        <th>THE FEATURES</th>
        <th>BASIC</th>
        <th>PRO</th>
        <th>BUSINESS</th>
      </tr>
      <tr>
        <td>UNLIMITED STORY POSTING</td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
      <tr>
        <td>UNLIMITED PHOTO UPLOAD</td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
      <tr>
        <td>EMBEDDING CUSTOM CONTENT</td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
      <tr>
        <td>CUSTOMIZE METADATA</td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
      <tr>
        <td>ADVANCED METRICS</td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
      <tr>
        <td>PHOTO DOWNLOADS</td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
      <tr>
        <td>SEARCH ENGINE INDEXING</td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
      <tr>
        <td>CUSTOM ANALYTICS</td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          {/* <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg> */}
        </td>
        <td>
          <svg className='table-check'>
            <use href={sprite + '#check'} />
          </svg>
        </td>
      </tr>
    </table>
  )
}

export default Table
