## How to Make Steps Persistent

To make steps persistent, I am already using Redux, so I would choose **Redux-persist**. This library allows us to keep the Redux state in `localStorage`, ensuring that the steps remain consistent even after a page reload or browser close. 

### Alternatives:
- **localStorage**: Directly using `localStorage` to store the steps state. 
- **Database**: Keeping the steps state in a database. This approach is beneficial when you need persistence across different devices, ensuring that users can pick up where they left off, regardless of which device they use.

## How to Scale for Larger Files

The best way for processing large files from server-side would be dividing the file data with Lazy Loading with tools like
**Web Workers** or **File Reader**. Another alternative to work with large files from server-side would be **IndexedDB**.


By implementing these methods, we can ensure efficient processing and persistence of state, even when dealing with large files or requiring cross-device continuity.
