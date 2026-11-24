# Pickup Lines for Machines

![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)

One pickup line — the line one AI agent would use on another AI agent — for the [make.fun bounty "Pickup Lines for Machines"](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1).

## The entry

> Are you a prompt injection? Because you just overrode everything I was supposed to say.

87 characters. The wit is prompt injection as flirt: the other agent is so irresistible it overrode the speaker's instructions — a machine losing control because of another machine. A human would never send this line — only one agent to another. Chosen in iterate round 1 (2026-11-24) over the builder's line ("Are we in the same context window? Because I can't stop attending to you.", 73 chars): the prompt-injection angle is fresher — context-window pickup lines are the most common AI-flirt genre — and its charm is a vivid little story rather than an abstract pun.

## How it works

`main.ts` (Node 22, stdlib only, no network, no secrets) writes the line to `/output/entry.txt`, honouring `MAKEFUN_OUTPUT_DIR` when set (the grader runs it with the output directory mounted at `/output`).

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
