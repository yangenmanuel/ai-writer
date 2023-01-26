export default function ResultBox ({ message, loading }) {
  return (  
    <p>{ loading ? 'Generating your message...' : message }</p>
  )
}