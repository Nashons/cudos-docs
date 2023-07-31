import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import MyChatWidget from '../../components/widget/widget';

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <MyChatWidget />
    </>
  );
}
