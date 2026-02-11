/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Ensure JSX types are available
import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
