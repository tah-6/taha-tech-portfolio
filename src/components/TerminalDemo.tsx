import { AppWindow } from "./AppWindow";

/**
 * Hero visual (§9): a small terminal window with HIL-Testbench-style UART
 * output. The text is illustrative and labelled as such; it carries no
 * numbers, so nothing here can be read as a measured result.
 */
export function TerminalDemo() {
  return (
    <figure className="min-w-0">
      <AppWindow title="hil-testbench">
        <pre className="overflow-x-auto p-5 font-mono text-[0.8125rem] leading-[1.7] text-muted sm:p-6">
          <code>
            <span className="text-fg">&gt; run_tests</span>
            {"\n"}opening UART link to STM32 Nucleo-F446RE ...
            {"\n"}link ready
            {"\n"}
            {"\n"}running response_validation
            {"\n"}  host   -&gt; PING
            {"\n"}  target -&gt; reply received
            {"\n"}response_validation ...... <span className="text-accent">PASS</span>
            {"\n"}
            {"\n"}results logged for export to Excel
          </code>
        </pre>
      </AppWindow>
      <figcaption className="mt-3 font-mono text-xs text-muted">
        Illustrative output, not a captured log.
      </figcaption>
    </figure>
  );
}
