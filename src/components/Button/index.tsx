import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

interface ButtonProps {}

const IButton: React.FunctionComponent<ButtonProps> = () => {
  return (
    <>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <h1>Contained Button</h1>
        <Button variant='contained'>Default</Button>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' disabled>
          Disabled
        </Button>
        <Button variant='contained' color='primary' href='#contained-buttons'>
          Link
        </Button>
      </div>
      <div>
        <h1>Disable Button</h1>
        <Button variant='contained' color='primary' disableElevation>
          Disable elevation
        </Button>
      </div>
      <div>
        <h1>Text Button</h1>
        <Button
          onClick={() => {
            alert('clicked');
          }}
        >
          Default
        </Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href='#text-buttons' color='primary'>
          Link
        </Button>
      </div>
      <div>
        <h1>Outlined Button</h1>
        <Button variant='outlined'>Default</Button>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' disabled>
          Disabled
        </Button>
        <Button variant='outlined' color='primary' href='#outlined-buttons'>
          Link
        </Button>
      </div>
      <div>
        <h1>Upload Button</h1>
        <div>
          <input
            accept='image/*'
            className=''
            id='contained-button-file'
            multiple
            type='file'
          />
          <label htmlFor='contained-button-file'>
            <Button variant='contained' color='primary' component='span'>
              Upload
            </Button>
          </label>
          <input
            accept='image/*'
            className=''
            id='icon-button-file'
            type='file'
          />
          <label htmlFor='icon-button-file'>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      </div>
    </>
  );
};

export default IButton;
